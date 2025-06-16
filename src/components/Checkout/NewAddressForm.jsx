import React from "react";

const NewAddressForm = () => {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px]"
      dir="rtl"
    >
      <h3 className="text-base font-semibold mb-6 text-[#1C1C1C]">
        إضافة عنوان جديد
      </h3>
      <form className="flex flex-col gap-4 text-sm text-right">
        {/* First Name */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الاسم الأول
          </label>
          <input
            type="text"
            placeholder="أضف الاسم الأول"
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الاسم الأخير
          </label>
          <input
            type="text"
            placeholder="أضف الاسم الأخير"
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الدولة
          </label>
          <select
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
            defaultValue="الأردن"
          >
            <option value="الأردن">الأردن</option>
            <option value="السعودية">السعودية</option>
            <option value="مصر">مصر</option>
            <option value="الإمارات">الإمارات</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            المدينة
          </label>
          <input
            type="text"
            placeholder="أضف المدينة"
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Street Name */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            اسم الشارع
          </label>
          <input
            type="text"
            placeholder="أضف العنوان بالتفصيل"
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block mb-1 text-[#1C1C1C] font-medium">
            الرمز البريدي
          </label>
          <input
            type="text"
            placeholder="أضف الرمز للمنطقة"
            className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="bg-[#0798F1] hover:bg-[#007dd1] text-white text-sm font-medium px-6 py-2 rounded-[8px] self-end transition-colors"
        >
          حفظ
        </button>
      </form>
    </div>
  );
};

export default NewAddressForm;
