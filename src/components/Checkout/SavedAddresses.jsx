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
            className={`relative flex items-start gap-4 rounded-[8px] p-4 border text-sm transition
              ${
                i === 0
                  ? "bg-[#F3FAFE] border-[#ADE4FF]"
                  : "bg-white border-[#D8D8D8]"
              }`}
          >
            {/* Action Icons (Trash & Edit) */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-6 h-6 p-[2px] bg-white rounded-md shadow-sm hover:opacity-80 transition">
                <img
                  src={trashIcon}
                  alt="Delete"
                  className="w-full h-full object-contain"
                />
              </button>
              <button className="w-6 h-6 p-[2px] bg-white rounded-md shadow-sm hover:opacity-80 transition">
                <img
                  src={penIcon}
                  alt="Edit"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>

            <div className="mt-1 ml-2">
              {i === 0 ? (
                <div className="w-6 h-6 rounded-full bg-[#0099FF] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
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
                <div className="w-6 h-6 rounded-full border border-gray-400" />
              )}
            </div>

            <div className="flex-1 text-right">
              <p className="font-bold text-sm text-[#1C1C1C]">محمود محمد</p>
              <p className="text-gray-500 leading-5 mt-1">
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
