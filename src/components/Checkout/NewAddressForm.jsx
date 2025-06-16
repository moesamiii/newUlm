import React, { useState } from "react";
import { getToken } from "../../features/auth/utils/tokenUtils"; // adjust path if needed

const NewAddressForm = () => {
  const [formData, setFormData] = useState({
    givenName: "",
    surName: "",
    country: "JO",
    city: "",
    street: "",
    state: "",
    postalCode: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("جارٍ إرسال البيانات...");

    const token = getToken(); // 🔐 Get auth token

    try {
      const response = await fetch(
        "https://test.newulmmed.com/api/BillingAddress/AddBillingAddress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatusMessage("✅ تم حفظ العنوان بنجاح");
      } else {
        const data = await response.json();
        console.error("Server Error:", data);
        setStatusMessage(`❌ ${data.statusMessage || "فشل الإرسال"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("❌ فشل الاتصال بالخادم");
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px]"
      dir="rtl"
    >
      <h3 className="text-base font-semibold mb-6 text-[#1C1C1C]">
        إضافة عنوان جديد
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-sm text-right"
      >
        {/* First Name */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الاسم الأول
          </label>
          <input
            type="text"
            name="givenName"
            placeholder="أضف الاسم الأول"
            value={formData.givenName}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الاسم الأخير
          </label>
          <input
            type="text"
            name="surName"
            placeholder="أضف الاسم الأخير"
            value={formData.surName}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Country (with ISO code values) */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الدولة
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
          >
            <option value="JO">الأردن</option>
            <option value="SA">السعودية</option>
            <option value="EG">مصر</option>
            <option value="AE">الإمارات</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            المدينة
          </label>
          <input
            type="text"
            name="city"
            placeholder="أضف المدينة"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Street */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            اسم الشارع
          </label>
          <input
            type="text"
            name="street"
            placeholder="أضف العنوان بالتفصيل"
            value={formData.street}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* State */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            المنطقة/الولاية
          </label>
          <input
            type="text"
            name="state"
            placeholder="أضف المنطقة"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الرمز البريدي
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="أضف الرمز للمنطقة"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="bg-[#0798F1] hover:bg-[#007dd1] text-white text-sm font-medium px-6 py-2 rounded-[8px] self-end transition-colors"
        >
          حفظ
        </button>

        {statusMessage && (
          <p className="text-sm mt-2 text-right text-[#DC2626]">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewAddressForm;
