import React from "react";
import trashIcon from "../../assets/icons/trash.png";
import penIcon from "../../assets/icons/pen.png";

const SavedAddresses = () => {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px] text-right"
      dir="rtl"
    >
      <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
        عنوان الفواتير المحفوظة
      </h2>

      <div className="space-y-3">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`relative rounded-[8px] border p-4 text-sm transition ${
              i === 0
                ? "bg-[#F3FAFE] border-[#ADE4FF]"
                : "bg-white border-[#D8D8D8]"
            }`}
          >
            {/* Top Row: Name + Check | Icons */}
            <div className="flex items-start justify-between">
              {/* Right side: Name + check */}
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm text-[#1C1C1C]">محمود محمد</p>
                {i === 0 ? (
                  <div className="w-5 h-5 rounded-full bg-[#0099FF] flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        stroke: "white",
                        strokeWidth: 3,
                        shapeRendering: "geometricPrecision",
                      }}
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border border-gray-400" />
                )}
              </div>

              {/* Left side: Icons */}
              <div className="flex gap-2">
                <button className="w-[18px] h-[18px] p-[2px] bg-white rounded-md shadow-sm hover:opacity-80 transition">
                  <img
                    src={penIcon}
                    alt="Edit"
                    className="w-full h-full object-contain"
                  />
                </button>
                <button className="w-[18px] h-[18px] p-[2px] bg-white rounded-md shadow-sm hover:opacity-80 transition">
                  <img
                    src={trashIcon}
                    alt="Delete"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Address Body */}
            <div className="mt-3">
              <p className="text-gray-500 leading-5">
                شارع الملك فهد، حي الورود، الرياض، <br />
                المملكة العربية السعودية
              </p>
              <p className="text-gray-400 mt-1 text-sm">11025</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;
