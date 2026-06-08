import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Zap, TrendingUp, Calendar, Percent, DollarSign } from "lucide-react";
import { useLocation } from "wouter";

export default function Offers() {
  const [, setLocation] = useLocation();
  const offers = [
    {
      id: 1,
      name: "العرض الذهبي",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      minDeposit: 1000,
      maxDeposit: 50000,
      profitRate: 31,
      distribution: "أسبوعي",
      contractDuration: 6,
      features: [
        { icon: DollarSign, label: "الحد الأدنى", value: "1,000 ريال" },
        { icon: DollarSign, label: "الحد الأقصى", value: "50,000 ريال" },
        { icon: Percent, label: "نسبة الأرباح", value: "31%" },
        { icon: Calendar, label: "توزيع الأرباح", value: "أسبوعي" },
        { icon: TrendingUp, label: "مدة العقد", value: "6 أشهر" }
      ],
      highlighted: false
    },
    {
      id: 2,
      name: "العرض البلاتيني",
      icon: Crown,
      color: "from-slate-400 to-slate-600",
      minDeposit: 51000,
      maxDeposit: 1000000,
      profitRate: 35,
      distribution: "أسبوعي",
      contractDuration: 6,
      features: [
        { icon: DollarSign, label: "الحد الأدنى", value: "51,000 ريال" },
        { icon: DollarSign, label: "الحد الأقصى", value: "1,000,000 ريال" },
        { icon: Percent, label: "نسبة الأرباح", value: "35%" },
        { icon: Calendar, label: "توزيع الأرباح", value: "أسبوعي" },
        { icon: TrendingUp, label: "مدة العقد", value: "6 أشهر" }
      ],
      highlighted: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">إسناد المالية</h1>
            <nav className="hidden md:flex gap-8">
              <a href="/" className="hover:text-yellow-400 transition">الصفحة الرئيسية</a>
              <a href="#offers" className="hover:text-yellow-400 transition">العروض</a>
              <a href="/" className="hover:text-yellow-400 transition">اتصل بنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">عروض الاستثمار المميزة</h2>
          <p className="text-xl text-gray-300">اختر العرض المناسب لك واستثمر مع أفضل نسب الأرباح</p>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {offers.map((offer) => {
              const IconComponent = offer.icon;
              return (
                <div
                  key={offer.id}
                  className={`relative ${
                    offer.highlighted ? "md:scale-105 md:shadow-2xl" : ""
                  }`}
                >
                  {/* Badge for highlighted offer */}
                  {offer.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-slate-400 to-slate-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ الأفضل
                      </span>
                    </div>
                  )}

                  <Card
                    className={`p-8 h-full flex flex-col overflow-hidden border-2 ${
                      offer.highlighted
                        ? "border-slate-400 bg-gradient-to-br from-slate-50 to-white"
                        : "border-yellow-300 bg-gradient-to-br from-yellow-50 to-white"
                    } hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`bg-gradient-to-br ${offer.color} p-4 rounded-lg shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">
                          {offer.name}
                        </h3>
                      </div>
                    </div>

                    {/* Main Profit Rate */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8 text-center border-2 border-blue-200">
                      <p className="text-gray-600 text-sm mb-2">نسبة الأرباح السنوية</p>
                      <p className="text-4xl font-bold text-blue-600">
                        {offer.profitRate}%
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-8 flex-grow">
                      {offer.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                          >
                            <div className="flex-shrink-0">
                              <FeatureIcon className="w-6 h-6 text-slate-600" />
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm text-gray-600">
                                {feature.label}
                              </p>
                              <p className="font-bold text-slate-900">
                                {feature.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        onClick={() => setLocation('/register')}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg py-6 font-bold shadow-lg"
                      >
                        <Zap className="w-5 h-5 ml-2" />
                        ابدأ الاستثمار الآن
                      </Button>
                      <Button
                        onClick={() => setLocation('/register')}
                        variant="outline"
                        className={`w-full text-lg py-6 font-bold border-2 ${
                          offer.highlighted
                            ? "border-slate-400 text-slate-600 hover:bg-slate-50"
                            : "border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                        }`}
                      >
                        اختر هذا العرض
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">مقارنة العروض</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="border border-gray-300 p-4 text-right">المميزات</th>
                  <th className="border border-gray-300 p-4 text-center">العرض الذهبي</th>
                  <th className="border border-gray-300 p-4 text-center">العرض البلاتيني</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-4 font-bold">الحد الأدنى للإيداع</td>
                  <td className="border border-gray-300 p-4 text-center">1,000 ريال</td>
                  <td className="border border-gray-300 p-4 text-center">51,000 ريال</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 p-4 font-bold">الحد الأقصى للإيداع</td>
                  <td className="border border-gray-300 p-4 text-center">50,000 ريال</td>
                  <td className="border border-gray-300 p-4 text-center">1,000,000 ريال</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-4 font-bold">نسبة الأرباح</td>
                  <td className="border border-gray-300 p-4 text-center text-yellow-600 font-bold">31%</td>
                  <td className="border border-gray-300 p-4 text-center text-slate-600 font-bold">35%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 p-4 font-bold">توزيع الأرباح</td>
                  <td className="border border-gray-300 p-4 text-center">أسبوعي</td>
                  <td className="border border-gray-300 p-4 text-center">أسبوعي</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-4 font-bold">مدة العقد</td>
                  <td className="border border-gray-300 p-4 text-center">6 أشهر</td>
                  <td className="border border-gray-300 p-4 text-center">6 أشهر</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت مستعد للاستثمار؟</h2>
          <p className="text-xl text-gray-300 mb-8">
            اختر العرض المناسب لك وابدأ رحلتك نحو تحقيق أهدافك المالية
          </p>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-12 py-6 font-bold">
            استشر خبراءنا الآن
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 إسناد المالية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
