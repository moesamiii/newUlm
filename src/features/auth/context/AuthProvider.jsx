import { createContext, useContext, useState, useEffect, useRef } from "react";
import {
  saveToken,
  getToken,
  clearToken,
  saveRefreshToken,
  getRefreshToken,
  clearRefreshToken,
} from "../utils/tokenUtils";
import { loginApi, refreshTokenApi } from "../services/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children, config }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());
  const [refreshToken, setRefreshTokenState] = useState(getRefreshToken());
  const [tokenReady, setTokenReady] = useState(!!getToken()); // ✅ New flag
  const [globalError, setGlobalError] = useState(null);

  const lastTokenRef = useRef(token);
  const lastRefreshTokenRef = useRef(refreshToken);

  const isInitialRefreshDoneRef = useRef(false);
  const isRefreshingRef = useRef(false);

  const login = async (credentials) => {
    const data = await loginApi(credentials, config.apiUrl);

    saveToken(data.token);
    saveRefreshToken(data.refreshToken);

    setToken(data.token);
    setRefreshTokenState(data.refreshToken);
    setTokenReady(true); // ✅ Ready after login

    lastTokenRef.current = data.token;
    lastRefreshTokenRef.current = data.refreshToken;

    setUser({
      userId: data.userId,
      email: data.email,
      name: data.arabicName || data.englishName,
    });

    setGlobalError(null);
  };

  const logout = () => {
    clearToken();
    clearRefreshToken();
    setToken(null);
    setRefreshTokenState(null);
    setTokenReady(false); // ✅ Reset on logout

    lastTokenRef.current = null;
    lastRefreshTokenRef.current = null;

    setUser(null);
    isInitialRefreshDoneRef.current = false;
    isRefreshingRef.current = false;

    setGlobalError("❌ جلسة العمل انتهت. الرجاء تسجيل الدخول من جديد.");
  };

  // Refresh token on first load
  useEffect(() => {
    const tryRefreshToken = async () => {
      if (!isInitialRefreshDoneRef.current && !getToken() && refreshToken) {
        try {
          isRefreshingRef.current = true;

          const data = await refreshTokenApi(refreshToken, config.apiUrl);

          if (data.accessToken && data.accessToken !== lastTokenRef.current) {
            saveToken(data.accessToken);
            setToken(data.accessToken);
            lastTokenRef.current = data.accessToken;
          }

          if (
            data.refreshToken &&
            data.refreshToken !== lastRefreshTokenRef.current
          ) {
            saveRefreshToken(data.refreshToken);
            setRefreshTokenState(data.refreshToken);
            lastRefreshTokenRef.current = data.refreshToken;
          }

          setTokenReady(true); // ✅ Ready after refresh
          isInitialRefreshDoneRef.current = true;
          isRefreshingRef.current = false;
          console.log("Token refreshed!");
        } catch (err) {
          console.error("Failed to refresh token:", err);
          logout();
        }
      }
    };

    tryRefreshToken();
  }, [refreshToken, config.apiUrl]);

  // Auto-refresh every 1 min
  useEffect(() => {
    let intervalId;

    if (token && refreshToken) {
      console.log("Starting auto-refresh interval...");

      intervalId = setInterval(async () => {
        if (isRefreshingRef.current) {
          console.log("Skip refresh: already in progress.");
          return;
        }

        try {
          isRefreshingRef.current = true;

          const data = await refreshTokenApi(refreshToken, config.apiUrl);

          if (data.accessToken && data.accessToken !== lastTokenRef.current) {
            saveToken(data.accessToken);
            setToken(data.accessToken);
            lastTokenRef.current = data.accessToken;
          }

          if (
            data.refreshToken &&
            data.refreshToken !== lastRefreshTokenRef.current
          ) {
            saveRefreshToken(data.refreshToken);
            setRefreshTokenState(data.refreshToken);
            lastRefreshTokenRef.current = data.refreshToken;
          }

          setTokenReady(true); // ✅ Mark ready after refresh
          console.log("Token auto-refreshed!");

          if (data.refreshToken === "") {
            console.warn("Refresh token is empty → logging out.");
            logout();
          }

          isRefreshingRef.current = false;
        } catch (err) {
          console.error("Auto refresh failed:", err);
          logout();
        }
      }, 1 * 60 * 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log("Cleared auto-refresh interval.");
      }
    };
  }, [refreshToken, config.apiUrl]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        tokenReady, // ✅ include in context
        refreshToken,
        login,
        logout,
        globalError,
        setGlobalError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
