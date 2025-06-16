import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiBell } from "react-icons/fi";
import avatar from "../assets/avatar-man.png";
import logo from "../assets/ulm-care-logo.png";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import ciImage from "../assets/ci.png";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-right" dir="rtl">
      {/* Navbar */}
      <header className="pt-[64px] bg-[#F9FAFB]">
        <nav className="w-full max-w-[1440px] mx-auto bg-white border-b border-[#FFFFFF]">
          <div className="h-[42px] px-[80px] flex items-center justify-between">
            <div className="flex items-center gap-[42px]">
              <div className="w-[131.54px]">
                <img src={logo} alt="Ulm Care Logo" className="h-[36px]" />
              </div>
              <div className="flex gap-4 text-[#6F6F6F] text-base">
                <span
                  onClick={() => navigate(-1)}
                  className="text-[#0798F1] font-semibold cursor-pointer hover:underline"
                >
                  الرئيسية
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span>خدماتنا</span>
                  <FiChevronDown className="w-4 h-4 mt-1" />
                </div>
                <span>كونكت للأطباء</span>
                <span>الدعم</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-[#6F6F6F]">
                <FiBell className="w-6 h-6" />
                <FiShoppingCart className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1">
                <span>ENG</span>
                <FiChevronDown className="w-5 h-5" />
              </div>
              <img
                src={avatar}
                alt="Avatar"
                className="w-[42px] h-[42px] rounded-full object-cover"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] pt-6 text-right">
        <div className="text-sm text-[#4B4B4B] font-normal mb-[-4px]">
          &lt; الرجوع
        </div>
        <div className="text-[#222222] text-[24px] font-bold leading-[100%] mt-[6px]">
          الدفع
        </div>
      </div>

      {/* Content Container */}
      <main className="max-w-[1280px] mx-auto mt-6 p-4 md:p-8 flex flex-col lg:flex-row-reverse gap-[20px] bg-white rounded-xl shadow-sm">
        {/* Order Summary (Right in RTL) */}
        <div
          className="bg-white p-6 rounded-xl shadow-sm w-full max-w-[582px] text-right"
          dir="rtl"
        >
          <h2 className="text-xl font-bold mb-4 text-[#1C1C1C]">
            تفاصيل الطلب
          </h2>

          {/* Item */}
          <div className="flex items-start justify-between gap-4 border-b border-[#E5E5E5] pb-4 mb-4">
            {/* Quantity */}
            <span className="text-[#4B4B4B] text-[14px] mt-1 whitespace-nowrap">
              1x
            </span>

            {/* Image */}
            <img
              src={ciImage}
              alt="صورة الخدمة"
              className="w-[86px] h-[86px] object-contain rounded-[16px]"
            />

            {/* Text */}
            <div className="flex flex-col items-end flex-1 gap-[2px]">
              <p className="text-[16px] font-bold text-[#1C1C1C] leading-tight">
                جراحة الفم والأسنان
              </p>
              <p className="text-[14px] text-[#6F6F6F] leading-tight">
                إزالة التصبغات والبقع
              </p>
              <p className="text-[14px] text-[#6F6F6F] leading-tight">
                يتطلب الصيام
              </p>
            </div>

            {/* Price */}
            <div className="text-[16px] font-medium text-[#4B4B4B] whitespace-nowrap mt-1">
              250 JOD
            </div>
          </div>

          {/* Tax */}
          <div className="flex justify-between text-sm text-[#6F6F6F] mb-2">
            <span>(%16) الضريبة</span>
            <span>35 JOD</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center p-4 bg-[#F3FAFF] rounded-[8px]">
            <div className="text-[16px] font-medium text-[#6F6F6F] text-right leading-snug">
              المبلغ المستحق
              <div className="text-[12px] text-[#B3B3B3] font-normal">
                شامل الضريبة
              </div>
            </div>
            <div className="text-[20px] font-bold text-[#0099FF]">285 JOD</div>
          </div>
        </div>

        {/* Form & Payment */}
        <section className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Saved Addresses */}
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
                  className={`flex items-start gap-4 rounded-[8px] p-4 border text-sm transition
        ${
          i === 0
            ? "bg-[#F3FAFE] border-[#ADE4FF]"
            : "bg-white border-[#D8D8D8]"
        }`}
                >
                  {/* Select circle on far right */}
                  <div className="mt-1 ml-2">
                    {i === 0 ? (
                      <div className="w-6 h-6 rounded-full bg-[#0099FF] flex items-center justify-center">
                        {/* Guaranteed white checkmark - 3 layers of protection */}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{
                            stroke: "white !important", // Inline style protection
                            strokeWidth: 3,
                            shapeRendering: "geometricPrecision",
                          }}
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="white" // SVG attribute protection
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="[&_*]:stroke-white" // Tailwind protection
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-gray-400" />
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex-1 text-right">
                    <p className="font-bold text-sm text-[#1C1C1C]">
                      محمود محمد
                    </p>
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

          {/* New Address Form */}
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
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الدولة
                </label>
                <select
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
                  defaultValue="الأردن"
                >
                  <option value="الأردن">الأردن</option>
                  <option value="السعودية">السعودية</option>
                  <option value="مصر">مصر</option>
                  <option value="الإمارات">الإمارات</option>
                </select>
              </div>

              {/* City */}
              {/* المدينة */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  المدينة
                </label>
                <input
                  type="text"
                  placeholder="أضف المدينة"
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* اسم الشارع */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  اسم الشارع
                </label>
                <input
                  type="text"
                  placeholder="أضف العنوان بالتفصيل"
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* الرمز البريدي */}
              <div>
                <label className="block mb-1 text-[#1C1C1C] font-medium">
                  الرمز البريدي
                </label>
                <input
                  type="text"
                  placeholder="أضف الرمز للمنطقة"
                  className="w-full border border-[#D8D8D8] rounded-[8px] p-3 text-sm text-right text-[#1C1C1C] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
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

          {/* Payment Method */}
          <div
            className="bg-white p-6 rounded-[24px] shadow-sm w-full max-w-[582px] text-right space-y-6"
            dir="rtl"
          >
            <h2 className="text-[20px] font-medium text-[#686767] leading-[100%]">
              اختر طريقة الدفع
            </h2>

            {/* Option 1: الدفع باستخدام البطاقة */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer hover:bg-[#F9FAFB] transition-colors">
              {/* Custom radio implementation */}
              <div className="relative flex items-center">
                {/* Hidden native radio */}
                <input
                  type="radio"
                  name="payment"
                  className="absolute opacity-0 w-0 h-0 peer"
                />

                {/* Custom radio circle */}
                <div className="w-5 h-5 rounded-full border-2 border-[#D8D8D8] flex items-center justify-center transition-all duration-200 peer-checked:border-[#0798F1] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0798F1]/30">
                  {/* Inner indicator */}
                  <div className="w-2.5 h-2.5 bg-[#0798F1] rounded-full opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"></div>
                </div>
              </div>

              {/* Payment content with card logos */}
              <div className="flex items-center gap-3 flex-1 justify-between">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[#1C1C1C] text-[14px] font-normal">
                    الدفع باستخدام البطاقة
                  </span>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/color/48/visa.png"
                    alt="Visa"
                    className="w-[61px] h-[42px] object-contain"
                    loading="lazy"
                  />
                  <img
                    src="https://img.icons8.com/color/48/mastercard-logo.png"
                    alt="MasterCard"
                    className="w-[42px] h-[42px] object-contain"
                    loading="lazy"
                  />
                  <img
                    src="https://img.icons8.com/color/48/paypal.png"
                    alt="PayPal"
                    className="w-[42px] h-[42px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </label>

            {/* Option 2: كاش */}
            <label className="group flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer hover:bg-[#F9FAFB] transition-colors">
              {/* Custom radio implementation */}
              <div className="relative flex items-center">
                {/* Hidden native radio */}
                <input
                  type="radio"
                  name="payment"
                  className="absolute opacity-0 w-0 h-0 peer"
                />

                {/* Custom radio circle */}
                <div className="w-5 h-5 rounded-full border-2 border-[#D8D8D8] flex items-center justify-center transition-all duration-200 peer-checked:border-[#0798F1] peer-focus-visible:ring-2 peer-focus-visible:ring-[#0798F1]/30">
                  {/* Inner indicator */}
                  <div className="w-2.5 h-2.5 bg-[#0798F1] rounded-full opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"></div>
                </div>
              </div>

              {/* Payment text - right aligned */}
              <span className="text-[#1C1C1C] text-[14px] font-normal flex-1 text-right pr-3">
                الدفع كاش في نيو أولم
              </span>
            </label>

            {/* Option 3: تقسيط بنك */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
              {/* Custom radio button implementation */}
              <div className="relative flex items-center">
                {/* Hidden native radio input */}
                <input
                  type="radio"
                  name="payment"
                  className="absolute opacity-0 w-0 h-0 peer"
                />

                {/* Custom radio circle */}
                <div className="w-5 h-5 rounded-full border-2 border-[#D8D8D8] flex items-center justify-center transition-all duration-200 peer-checked:border-[#0099FF] peer-focus:ring-2 peer-focus:ring-[#0099FF]/30">
                  {/* Inner dot that appears when checked */}
                  <div className="w-2.5 h-2.5 bg-[#0099FF] rounded-full opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"></div>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col items-end text-right flex-1 mr-2">
                <span className="text-[#1C1C1C] text-[14px] font-normal">
                  دفع بالتقسيط عن طريق البنك
                </span>
                <span className="text-[#0798F1] text-[14px] font-medium">
                  من 10 إلى JOD 1,000
                </span>
              </div>
            </label>

            {/* Option 4: تقسيط موقع */}
            <label className="flex items-center justify-between border border-[#D8D8D8] rounded-[16px] px-4 py-4 cursor-pointer hover:bg-gray-50">
              {/* Custom radio button with guaranteed white/gray/blue styling */}
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="absolute opacity-0 w-0 h-0" // Hide native input
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-200">
                  {/* White inner dot that appears when checked */}
                  <div className="w-2.5 h-2.5 bg-[#0099FF] rounded-full opacity-0 transform scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100"></div>
                </div>
              </div>

              <div className="flex flex-col items-end text-right flex-1 mr-2">
                <span className="text-[#1C1C1C] text-[14px] font-normal">
                  دفع بالتقسيط عن طريق الموقع
                </span>
                <span className="text-[#0798F1] text-[14px] font-medium">
                  من 1,000 إلى JOD 10,000
                </span>
              </div>
            </label>

            <style jsx>{`
              /* This ensures the custom radio works without flashing black */
              input:checked + div > div {
                opacity: 1;
                transform: scale(1);
              }
              input:focus + div {
                box-shadow: 0 0 0 2px rgba(0, 153, 255, 0.3);
              }
            `}</style>
          </div>
        </section>
      </main>

      {/* Payment Button */}
      <div className="w-full flex justify-center px-4 md:px-[80px] mt-8">
        <button className="w-full max-w-[400px] bg-[#0798F1] hover:bg-[#007dd1] text-white py-3 rounded-lg font-semibold text-sm">
          إتمام الدفع
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#0C1E2C] text-white py-10 px-4 md:px-[80px] text-sm mt-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-3">Ulm Care</h4>
            <p>
              تقديم خدمات طبية شاملة بأعلى معايير الجودة والاحترافية، لضمان
              الرعاية المتكاملة لك ولعائلتك.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">الشركة</h4>
            <ul className="space-y-1">
              <li>من نحن؟</li>
              <li>انضم لنا</li>
              <li>الدعم</li>
              <li>أسئلة شائعة</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">خدماتنا</h4>
            <ul className="space-y-1">
              <li>التحاليل الطبية</li>
              <li>العيادات</li>
              <li>الأشعة</li>
              <li>الأطباء</li>
              <li>الرعاية المنزلية</li>
              <li>المرافقة الصحية</li>
              <li>السياحة العلاجية</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">تواصل معنا</h4>
            <p>+962790098906</p>
            <p>info@ulmcare.jo</p>
            <p>Wasfi AlTal St. P.O. Box. 5873 Amman - 11953 Jordan</p>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-300 border-t border-gray-700 pt-4">
          جميع الحقوق محفوظة © New ULM®
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
