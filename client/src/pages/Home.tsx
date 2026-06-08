import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // صور الخلفية المتحركة
  const heroImages = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/hero-building-esnad-QbKfVbHXB6zTvrAX8CNTjL.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/hero-office-esnad-flag-4jEPaCoWwb3eh8CpCDTHHj.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/hero-meeting-contracts-mTFbdEpof9cbTHQFKFPtRJ.webp"
  ];
  
  // تغيير الصور كل ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // تغيير كل 3 ثوان
    return () => clearInterval(interval);
  }, [heroImages.length]);
  // صور الخدمات الرئيسية
  const serviceImages = {
    governance: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_12-web-2.jpg",
    riskManagement: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_14-web.jpg",
    fundDevelopment: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_16-web-1.jpg",
    licensing: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_17-web-1.jpg",
    internalAudit: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_15-web-1.jpg",
    arrangement: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_19-web-1.jpg",
    feasibility: "https://www.esnadadvisory.sa/wp-content/uploads/2024/09/dma_20-web.jpg",
    compliance: "https://www.esnadadvisory.sa/wp-content/uploads/2025/05/Image.jpg"
  };

  // شعارات العملاء (الصور الصغيرة)
  const clientLogos = Array.from({ length: 57 }, (_, i) => 
    `https://www.esnadadvisory.sa/wp-content/uploads/2024/09/${i + 1}-150x150.png`
  );

  const services = [
    {
      id: 1,
      title: "خدمات الحوكمة",
      description: "تهدف حوكمة الشركات الى زيادة كفاءة وفعالية إدارة المنظمات، وتوفر للشركة قاعدة مستقرة يمكن من خلالها تنفيذ أعمالها بأدوار وصلاحيات محددة بوضوح ومن خلال الضوابط والتوازنات اللازمة. لذلك تعد حوكمة الشركات أداة عمل عملية وعنصرًا أساسيًا لا يتجزأ من العمل الإداري الفعال.",
      image: serviceImages.governance,
      link: "/governance-services/"
    },
    {
      id: 2,
      title: "إدارة المخاطر",
      description: "إدارة المخاطر هي عملية قياس وتقييم للمخاطر وتطوير إستراتيجيات لإدارتها، وكذلك تحديد الإستراتيجية التي سيتم اتّباعها لإدارة ورصد المخاطر المستقبلية. وتشمل خدمات ادارة المخاطر في شركة اسناد المالية العديد من الخدمات منها التقييم الدوري للمخاطر واعداد خطة شاملة للمخاطر.",
      image: serviceImages.riskManagement,
      link: "/risk-managment-services/"
    },
    {
      id: 3,
      title: "تطوير وهيكلة الصناديق",
      description: "تهدف صناديقُ الاستثمار لتحقيق أهداف ومٌتطلبات المستثمرين، وتناسب مستويات المخاطر المقبولة لديهم. وبناءً على أهدف كل صندوق يتم إتباع إستراتيجيات إستثمارية لتحقيقها، لذا تختلف الأوراق المالية التي تُشكل أصول هذه الصناديق بإختلاف أهدافها.",
      image: serviceImages.fundDevelopment,
      link: "/fund-development-services/"
    },
    {
      id: 4,
      title: "الالتزام ومكافحة غسيل الأموال",
      description: "يعد قسم المطابقة والالتزام ومكافحة غسيل الاموال وتمويل الارهاب اساسيا في الشركات المالية حيث انه لا يمكن تأسيس شركة مالية وقبول طلب الترخيص من قبل هيئة السوق المالية الا بوجود هذا القسم حيث تزيد المطابقة والالتزام ومكافحة غسيل الاموال وتمويل الارهاب من الأمان والاستقرار.",
      image: serviceImages.compliance,
      link: "/compliance-services/"
    },
    {
      id: 5,
      title: "خدمات التراخيص",
      description: "يحتاج المستثمرون في السوق المالية السعودي الى الحصول على الرخص المطلوبة لممارسة العمل في بيئة تنظيمية عن طريق تقديم طلب الى هيئة السوق المالية. نقوم نحن بشركة اسناد المالية بتولي ملف الرخصة بالنيابة عن العميل وذلك عن طريق اعداد المستندات المطلوبة.",
      image: serviceImages.licensing,
      link: "/licensing-services/"
    },
    {
      id: 6,
      title: "خدمات المراجعة الداخلية",
      description: "بدون المراجعة الداخلية تعاني الشركات بشكل كبير لغياب الدور الرقابي الفعال، فبدون ضوابط ترتفع نسبة الأخطاء والأعمال غير المشروعة والتي تحول دون تحقيق الشركات لأهدافها. في إسناد لدينا نخبة من الخبراء في المراجعة الداخلية لمساعدتك في الوصول لأهدافك.",
      image: serviceImages.internalAudit,
      link: "/internal-audit-services/"
    },
    {
      id: 7,
      title: "خدمات الترتيب",
      description: "خدمات الترتيب تركز على تنسيق وإدارة الصفقات المالية، مثل تمويل المشاريع وإصدار الأوراق المالية، مع ضمان الامتثال للقوانين والمعايير المالية. دوره الأساسي هو تسهيل التعاملات بين الشركة والعملاء، وتقليل المخاطر المالية، وتحسين الكفاءة التشغيلية.",
      image: serviceImages.arrangement,
      link: "/arrangement-services/"
    },
    {
      id: 8,
      title: "خدمات دراسات الجدوي",
      description: "خدمات دراسات الجدوى تهدف إلى تقييم جدوى المشاريع الاستثمارية من خلال تحليل الجوانب المالية، الفنية، والتسويقية. تساعد هذه الدراسات في تحديد مدى قدرة المشروع على تحقيق الأرباح وتلبية المتطلبات التقنية والسوقية، مما يدعم اتخاذ قرارات استثمارية مستنيرة.",
      image: serviceImages.feasibility,
      link: "/feasibility-studies-services/"
    }
  ];

  const highlights = [
    {
      title: "الخبرات والمعرفة العميقة",
      description: "من خلال العمل مع شركات وهيئات رائدة"
    },
    {
      title: "نخبة مميزة من الكوادر",
      description: "أفضل الكوادر المحلية والدولية في كل المجالات"
    },
    {
      title: "التميز والجودة",
      description: "نمكن عملائنا من تحقيق أعلى درجات التميز والجودة وبأقل الموارد المتاحة"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header/Navigation */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">إسناد المالية</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="hover:text-yellow-400 transition">الصفحة الرئيسية</a>
              <a href="#services" className="hover:text-yellow-400 transition">خدماتنا</a>
              <a href="#about" className="hover:text-yellow-400 transition">عن الشركة</a>
              <button onClick={() => setLocation('/board')} className="hover:text-yellow-400 transition">مجلس الإدارة</button>
              <button onClick={() => setLocation('/blog')} className="hover:text-yellow-400 transition">مدونة</button>
              <button onClick={() => setLocation('/offers')} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-bold cursor-pointer">اكتشف العروض</button>
              <a href="#contact" className="hover:text-yellow-400 transition">اتصل بنا</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-yellow-400" />
              ) : (
                <Menu size={28} className="text-yellow-400" />
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4 space-y-2">
              <a href="#" className="block py-2 px-4 hover:bg-slate-800 rounded transition">الصفحة الرئيسية</a>
              <a href="#services" className="block py-2 px-4 hover:bg-slate-800 rounded transition">خدماتنا</a>
              <a href="#about" className="block py-2 px-4 hover:bg-slate-800 rounded transition">عن الشركة</a>
              <button onClick={() => { setLocation('/board'); setMobileMenuOpen(false); }} className="block w-full text-right py-2 px-4 hover:bg-slate-800 rounded transition">مجلس الإدارة</button>
              <button onClick={() => { setLocation('/blog'); setMobileMenuOpen(false); }} className="block w-full text-right py-2 px-4 hover:bg-slate-800 rounded transition">مدونة</button>
              <button onClick={() => { setLocation('/offers'); setMobileMenuOpen(false); }} className="block w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition font-bold">اكتشف العروض</button>
              <a href="#contact" className="block py-2 px-4 hover:bg-slate-800 rounded transition">اتصل بنا</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-32 px-4 overflow-hidden">
        {/* Background Image with Slideshow */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroImages[currentSlide]})`,
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
            لماذا إسناد المالية هي خيارك الإستراتيجي الأفضل لتحقيق أهدافك
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-lg">
            شركة استشارية رائدة في مجال الخدمات المالية، تقدم فرصاً استثمارية موثوقة مُرخصة من الجهات التنظيمية، بعوائد تنافسية وفق أعلى معايير التنظيم والشفافية
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 shadow-lg">
              اتصل بنا
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 shadow-lg">
              خدماتنا
            </Button>
            <Button onClick={() => setLocation('/offers')} variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 shadow-lg cursor-pointer">
              اكتشف العروض
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Images Section */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">فريقنا المتخصص</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/professional-office-7nPfzAuHBnwQdkUKPGH6xS.webp" alt="مكتب احترافي" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/saudi-businessmen-office-FNt82VdF2x6DGcw324xSHF.webp" alt="رجال أعمال سعوديين" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition flex items-center justify-center">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/saudi-stock-market-esnad-PpD9tmqfk2HyjmjUCjTD2b.webp" alt="شاشة أسهم سعودية - إسناد المالية" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Guarantee Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">ضمان المستثمر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/investor-guarantee-handshake-3h9y5AU4rNUsGyyePmQmu8.webp" alt="ضمان المستثمر - المصافحة" className="w-full h-auto object-cover" />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {/* Guarantee Info */}
              <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-yellow-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">عقد إلكتروني مصرح ومصدق</h3>
                <p className="text-gray-700 text-lg">عقد استثماري إلكتروني مصرح ومصدق من الغرفة التجارية السعودية، يضمن حقوقك كمستثمر بكل شفافية واحترافية.</p>
              </div>
              
              {/* Contract Duration */}
              <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  مدة العقد: 6 أشهر
                </h3>
                <p className="text-gray-700">يبدأ العقد من تاريخ الاشتراك ولمدة 6 أشهر كاملة، مع إمكانية التجديد أو السحب بعد انتهاء المدة.</p>
              </div>
              
              {/* Withdrawal Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  خيارات السحب
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <p className="font-bold text-slate-900 mb-1">بعد انتهاء العقد (6 أشهر)</p>
                    <p className="text-gray-700">يحق لك سحب رأس المال كاملاً أو تجديد العقد دون أي خصومات</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-bold text-slate-900 mb-1">السحب المبكر (خلال فترة العقد)</p>
                    <p className="text-gray-700">يمكنك السحب في أي وقت، مع خصم 25% من المبلغ</p>
                  </div>
                </div>
              </div>
              
              {/* Profits */}
              <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  الأرباح الأسبوعية
                </h3>
                <p className="text-gray-700 mb-4">يتم تحويل الأرباح كل نهاية أسبوع مباشرة إلى محفظتك الإلكترونية المختارة.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-900 border border-purple-300">💳 Binance</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-900 border border-purple-300">💳 OKX</span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-slate-900 border border-purple-300">💳 محافظ أخرى</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{highlight.title}</h3>
                <p className="text-gray-600 text-lg">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">عن إسناد المالية</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              شركة ذات مسؤولية محدودة مقرها الرياض برأس مال قدره 85 مليون ريال سعودي. حصلت على ترخيص هيئة السوق المالية رقم (٢٠-١٩٢٠٦) بتاريخ ١٤٤١/١/١١ الموافق ٢٠١٩/٩/١ م لتقديم خدمات الترتيب والمشورة في أعمال الأوراق المالية وقد بدأت ممارسة العمل بعد استيفاء جميع الشروط اللازمة لممارسة النشاط وذلك بتاريخ ١٤٤١/٦/٩ الموافق ٢٠٢٠/٢/٣ م.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              مسجلة بسجل تجاري رقم (١٠١٠٥٧٥٤٢١) ورقم موحد (٧٠٠٨٩٢١١٦٠) وتتخصص الشركة في تقديم المشورة في أعمال الأوراق المالية. الشركة حاصلة على نشاط الترتيب بعد الحصول على موافقة الهيئة على تعديل قوائم أعمالها بتاريخ ٢٠٢٤/٠٦/٠٤ م.
            </p>
            <div className="bg-white p-4 rounded mt-6 border-r-4 border-yellow-400">
              <p className="text-sm text-gray-600">
                <strong>ملاحظة مهمة:</strong> شركة إسناد المالية شركة مرخصة من هيئة السوق المالية لتقديم أعمال المشورة في الأوراق المالية والترتيب مرخصة بأعمال التداول في الأسهم أو أسواق الفوركس.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="p-0 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/300x200?text=" + encodeURIComponent(service.title);
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-4">{service.description}</p>
                  <Button variant="outline" className="w-full text-sm mt-auto">
                    اقرأ المزيد
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">خدمات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-3 text-slate-900">صكوك الصحة</h4>
              <p className="text-gray-600">منتجات استثمارية متخصصة في قطاع الصحة والخدمات الطبية</p>
              <Button variant="outline" className="w-full mt-4">اقرأ المزيد</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-3 text-slate-900">منصة طرح</h4>
              <p className="text-gray-600">منصة متخصصة لطرح الفرص الاستثمارية والتعاملات المالية</p>
              <Button variant="outline" className="w-full mt-4">استكشف الفرص</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">عملاؤنا</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg flex items-center justify-center hover:shadow-md transition">
                <img 
                  src={logo} 
                  alt={`عميل ${idx + 1}`}
                  className="max-w-full max-h-24 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">تواصل معنا</h2>
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">الهاتف</h3>
              <p className="text-gray-300">00966591354142</p>
              <p className="text-gray-400 text-sm mt-2">الاستاذ هيثم</p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
              اتصل بنا الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">تابعنا على وسائل التواصل</h3>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#" className="hover:text-yellow-400 transition text-lg">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition text-lg">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition text-lg">Instagram</a>
            <a href="https://wa.me/966591354142" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition text-lg flex items-center gap-2">
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <a href="#" className="hover:text-yellow-400 transition text-lg">Google</a>
            <a href="#" className="hover:text-yellow-400 transition text-lg">TikTok</a>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/966591354142" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-40"
        title="تواصل معنا عبر WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">الشركة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">الرؤية والرسالة والقيم</a></li>
                <li><a href="#" className="hover:text-white">الهيكل التنظيمي</a></li>
                <li><a href="#" className="hover:text-white">مجلس الإدارة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">الموارد</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">الإفصاح</a></li>
                <li><a href="#" className="hover:text-white">المدونة</a></li>
                <li><a href="#" className="hover:text-white">التوظيف</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">معلومات</h4>
              <p className="text-sm">الرقم الموحد: ٧٠٠٨٩٢١١٦٠</p>
              <p className="text-sm">الرقم الضريبي: ٣١٠٣٥٨٥٢٧٠٠٠٠٣</p>
              <p className="text-sm mt-4">ترخيص هيئة السوق المالية: ٢٠-١٩٢٠٦</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 شركة إسناد المالية. جميع الحقوق محفوظة.</p>
            <p className="mt-2">تطوير: <a href="#" className="hover:text-white">eon.sa</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
