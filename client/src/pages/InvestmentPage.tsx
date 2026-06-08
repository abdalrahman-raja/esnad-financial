import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

// قائمة الدول
const COUNTRIES = [
  { code: "SA", name: "المملكة العربية السعودية" },
  { code: "AE", name: "الإمارات العربية المتحدة" },
  { code: "EG", name: "مصر" },
  { code: "KSA", name: "الكويت" },
  { code: "QA", name: "قطر" },
  { code: "BH", name: "البحرين" },
  { code: "OM", name: "عمان" },
  { code: "JO", name: "الأردن" },
  { code: "LB", name: "لبنان" },
  { code: "SY", name: "سوريا" },
  { code: "IQ", name: "العراق" },
  { code: "PS", name: "فلسطين" },
  { code: "YE", name: "اليمن" },
  { code: "MA", name: "المغرب" },
  { code: "TN", name: "تونس" },
  { code: "DZ", name: "الجزائر" },
  { code: "LY", name: "ليبيا" },
  { code: "SD", name: "السودان" },
  { code: "US", name: "الولايات المتحدة" },
  { code: "GB", name: "المملكة المتحدة" },
  { code: "DE", name: "ألمانيا" },
  { code: "FR", name: "فرنسا" },
  { code: "IT", name: "إيطاليا" },
  { code: "ES", name: "إسبانيا" },
  { code: "NL", name: "هولندا" },
  { code: "BE", name: "بلجيكا" },
  { code: "CH", name: "سويسرا" },
  { code: "AT", name: "النمسا" },
  { code: "SE", name: "السويد" },
  { code: "NO", name: "النرويج" },
  { code: "DK", name: "الدنمارك" },
  { code: "FI", name: "فنلندا" },
  { code: "PL", name: "بولندا" },
  { code: "CZ", name: "التشيك" },
  { code: "HU", name: "المجر" },
  { code: "RO", name: "رومانيا" },
  { code: "GR", name: "اليونان" },
  { code: "PT", name: "البرتغال" },
  { code: "IE", name: "أيرلندا" },
  { code: "CA", name: "كندا" },
  { code: "AU", name: "أستراليا" },
  { code: "NZ", name: "نيوزيلندا" },
  { code: "JP", name: "اليابان" },
  { code: "CN", name: "الصين" },
  { code: "IN", name: "الهند" },
  { code: "BR", name: "البرازيل" },
  { code: "MX", name: "المكسيك" },
  { code: "ZA", name: "جنوب أفريقيا" },
  { code: "SG", name: "سنغافورة" },
  { code: "HK", name: "هونغ كونغ" },
  { code: "TH", name: "تايلاند" },
  { code: "MY", name: "ماليزيا" },
  { code: "ID", name: "إندونيسيا" },
  { code: "PH", name: "الفلبين" },
  { code: "VN", name: "فيتنام" },
  { code: "KR", name: "كوريا الجنوبية" },
  { code: "TW", name: "تايوان" },
  { code: "RU", name: "روسيا" },
  { code: "TR", name: "تركيا" },
  { code: "IR", name: "إيران" },
  { code: "PK", name: "باكستان" },
  { code: "BD", name: "بنغلاديش" },
];

// قائمة العملات
const CURRENCIES = [
  { code: "SAR", name: "الريال السعودي" },
  { code: "AED", name: "الدرهم الإماراتي" },
  { code: "EGP", name: "الجنيه المصري" },
  { code: "KWD", name: "الدينار الكويتي" },
  { code: "QAR", name: "الريال القطري" },
  { code: "BHD", name: "الدينار البحريني" },
  { code: "OMR", name: "الريال العماني" },
  { code: "JOD", name: "الدينار الأردني" },
  { code: "USD", name: "الدولار الأمريكي" },
  { code: "EUR", name: "اليورو" },
  { code: "GBP", name: "الجنيه الإسترليني" },
  { code: "JPY", name: "الين الياباني" },
  { code: "CHF", name: "الفرنك السويسري" },
  { code: "CAD", name: "الدولار الكندي" },
  { code: "AUD", name: "الدولار الأسترالي" },
  { code: "CNY", name: "اليوان الصيني" },
  { code: "INR", name: "الروبية الهندية" },
  { code: "BRL", name: "الريال البرازيلي" },
  { code: "MXN", name: "البيزو المكسيكي" },
  { code: "SGD", name: "الدولار السنغافوري" },
  { code: "HKD", name: "دولار هونغ كونغ" },
  { code: "THB", name: "الباث التايلاندي" },
  { code: "MYR", name: "الرينجت الماليزي" },
  { code: "IDR", name: "روبية إندونيسية" },
  { code: "PHP", name: "البيزو الفلبيني" },
  { code: "VND", name: "الدونج الفيتنامي" },
  { code: "KRW", name: "الوون الكوري" },
  { code: "TWD", name: "الدولار التايواني" },
  { code: "RUB", name: "الروبل الروسي" },
  { code: "TRY", name: "الليرة التركية" },
  { code: "PKR", name: "الروبية الباكستانية" },
  { code: "BDT", name: "التاكا البنغالية" },
];

// قائمة المحافظ
const WALLETS = [
  { id: "binance", name: "Binance" },
  { id: "okx", name: "OKX" },
  { id: "kraken", name: "Kraken" },
  { id: "coinbase", name: "Coinbase" },
  { id: "huobi", name: "Huobi" },
  { id: "bybit", name: "Bybit" },
  { id: "kucoin", name: "KuCoin" },
  { id: "gate", name: "Gate.io" },
  { id: "bitfinex", name: "Bitfinex" },
  { id: "crypto", name: "Crypto.com" },
  { id: "metamask", name: "MetaMask" },
  { id: "trust", name: "Trust Wallet" },
  { id: "ledger", name: "Ledger" },
  { id: "trezor", name: "Trezor" },
  { id: "other", name: "أخرى" },
];

export default function InvestmentPage() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    nationality: "",
    capital: "",
    currency: "SAR",
    walletType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Get offer from URL params
  const params = new URLSearchParams(window.location.search);
  const offerType = params.get("offer") || "golden";

  const offers = {
    golden: {
      name: "العرض الذهبي",
      minDeposit: 1000,
      maxDeposit: 50000,
      profitRate: 31,
    },
    platinum: {
      name: "العرض البلاتيني",
      minDeposit: 51000,
      maxDeposit: 1000000,
      profitRate: 35,
    },
  };

  const offer = offers[offerType as keyof typeof offers] || offers.golden;

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "الاسم الكامل مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الجوال مطلوب";
    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "البريد الإلكتروني غير صحيح";
    if (!formData.age) newErrors.age = "العمر مطلوب";
    if (parseInt(formData.age) < 18) newErrors.age = "يجب أن يكون عمرك 18 سنة فأكثر";
    if (!formData.nationality) newErrors.nationality = "الجنسية مطلوبة";
    if (!formData.capital) newErrors.capital = "رأس المال مطلوب";
    if (!formData.walletType) newErrors.walletType = "نوع المحفظة مطلوب";
    
    const capital = parseFloat(formData.capital);
    if (capital < offer.minDeposit || capital > offer.maxDeposit) {
      newErrors.capital = `رأس المال يجب أن يكون بين ${offer.minDeposit.toLocaleString()} و ${offer.maxDeposit.toLocaleString()}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Investment submitted:", { offer: offer.name, ...formData });
      setSubmitted(true);
      setTimeout(() => {
        setLocation("/");
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center" dir="rtl">
        <Card className="p-12 text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-slate-900">تم استقبال طلبك بنجاح!</h2>
          <p className="text-gray-600 mb-6">
            شكراً لاختيارك {offer.name}. سيتم التواصل معك قريباً على رقم الجوال المسجل.
          </p>
          <p className="text-sm text-gray-500">سيتم إعادة توجيهك للصفحة الرئيسية...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>العودة</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">نموذج الاستثمار</h1>
          <p className="text-lg text-gray-600">أكمل البيانات التالية للتسجيل في {offer.name}</p>
        </div>

        <Card className="p-8 border-2 border-blue-200">
          {/* Offer Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{offer.name}</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">نسبة الأرباح</p>
                <p className="text-3xl font-bold text-green-600">{offer.profitRate}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">الحد الأدنى</p>
                <p className="text-2xl font-bold text-slate-900">{offer.minDeposit.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">الحد الأقصى</p>
                <p className="text-2xl font-bold text-slate-900">{offer.maxDeposit.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold mb-2">الاسم الكامل *</label>
              <Input
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="أدخل الاسم الكامل"
                className={`text-lg py-3 ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold mb-2">رقم الجوال *</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="أدخل رقم الجوال"
                className={`text-lg py-3 ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold mb-2">البريد الإلكتروني *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="أدخل البريد الإلكتروني"
                className={`text-lg py-3 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-bold mb-2">العمر *</label>
              <Input
                type="number"
                min="18"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                placeholder="أدخل العمر (18 سنة فما فوق)"
                className={`text-lg py-3 ${errors.age ? "border-red-500" : ""}`}
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-bold mb-2">الجنسية *</label>
              <select
                value={formData.nationality}
                onChange={(e) => handleChange("nationality", e.target.value)}
                className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.nationality ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">اختر الجنسية</option>
                {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
            </div>

            {/* Capital and Currency */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">رأس المال *</label>
                <Input
                  type="number"
                  value={formData.capital}
                  onChange={(e) => handleChange("capital", e.target.value)}
                  placeholder="أدخل رأس المال"
                  className={`text-lg py-3 ${errors.capital ? "border-red-500" : ""}`}
                />
                {errors.capital && <p className="text-red-500 text-sm mt-1">{errors.capital}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">العملة *</label>
                <select
                  value={formData.currency}
                  onChange={(e) => handleChange("currency", e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  {CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Wallet Type */}
            <div>
              <label className="block text-sm font-bold mb-2">نوع المحفظة *</label>
              <select
                value={formData.walletType}
                onChange={(e) => handleChange("walletType", e.target.value)}
                className={`w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:border-blue-500 ${
                  errors.walletType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">اختر نوع المحفظة</option>
                {WALLETS.map((wallet) => (
                  <option key={wallet.id} value={wallet.id}>
                    {wallet.name}
                  </option>
                ))}
              </select>
              {errors.walletType && <p className="text-red-500 text-sm mt-1">{errors.walletType}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 text-lg"
            >
              تقديم طلب الاستثمار
            </Button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-600 text-center mt-6">
            بالضغط على "تقديم طلب الاستثمار" فإنك توافق على شروط وأحكام الاستثمار
          </p>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 إسناد المالية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
