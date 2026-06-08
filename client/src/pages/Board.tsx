import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Board() {
  const [, setLocation] = useLocation();

  const boardMembers = [
    {
      id: 1,
      name: "لطيفة الهديب",
      position: "رئيس مجلس الإدارة والعضو المنتدب",
      type: "رئيس مجلس الإدارة",
      bio: "لدى السيدة لطيفة خبرة أكثر من 15 عاماً في مجال الخدمات المصرفية والاستثمارية والاستراتيجية. شغلت مناصب عدة في البنك السعودي الفرنسي والعربي للاستثمار وشركة مطارات الرياض وغيرها. أسست وساهمت بتأسيس إدارات التميز المؤسسي والرقابة الداخلية والحوكمة والمخاطر وعدد من صناديق رأس المال الجريء مرخصة من هيئة السوق المالية. حاصلة على درجة البكالوريوس في العلوم من جامعة الملك سعود بالرياض وماجستير إدارة أعمال – مالية من جامعة Dublin City University وكذلك ماجستير إدارة رياضية وقانون رياضي من ISD."
    },
    {
      id: 2,
      name: "هيثم سلامة",
      position: "الرئيس التنفيذي ومدير المصرفية الاستثمارية",
      type: "الرئيس التنفيذي",
      bio: "مدير ذو خبرة متميزة في مجال الخدمات المالية ولديه سجل حافل في العمل في هذا المجال. متخصص في التخطيط الاستراتيجي للأعمال، ودراسات الجدوى وتمويل الشركات والتقييم، والتحليل المالي. محترف قوي وحاصل على درجة الماجستير في إدارة الأعمال (MBA) الذي يركز على إدارة الأعمال من جامعة ريادة الأعمال والأعمال (EBU)."
    },
    {
      id: 3,
      name: "مروة مراد",
      position: "عضو مجلس إدارة مستقل",
      type: "عضو مستقل",
      bio: "تخرجت من جامعة القاهرة بدرجة البكالوريوس في الهندسة المعمارية عام 2003 مع مرتبة الشرف. مهندس محترف من هيئة المهندسين السعودية عام 2018 وحاصلة على شهادة محترف إدارة المشاريع المعتمد (PMP) عام 2009 ودرجة الماجستير في الهندسة المعمارية من جامعة القاهرة عام 2008. تتمتع بأكثر من 18 عاماً من الخبرة العملية في قيادة فرق التصميم والإشراف وإدارة ومراقبة المشاريع. لديها خبرة ممتازة في تحليل وتصميم معظم أنواع الهندسة المعمارية. حالياً الرئيس التنفيذي لـ MDMS Office."
    },
    {
      id: 4,
      name: "رنا العمير",
      position: "عضو مجلس إدارة غير مستقل",
      type: "عضو غير مستقل",
      bio: "تتمتع السيدة رنا العمير بخبرة تزيد عن 12 عاماً في قطاع الخدمات المالية في المملكة العربية السعودية. خبيرة في مبادرات الامتثال التنظيمي المصرفي وتقييم مخاطر المؤسسات وتحقيقات الاحتيال. أظهرت كفاءتها في مجال الامتثال من خلال اجتياز امتحان الحماية من غسيل الأموال المعتمد (CAMS). حالياً رئيس قسم الالتزام في مجموعة النفيعي للاستثمار. تشغل عضوية لجان التدقيق في العديد من الشركات. حاصلة على درجة الماجستير في إدارة الأعمال من جامعة الفيصل وعلى درجة البكالوريوس في اللغة الإنجليزية من جامعة الملك سعود."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">إسناد المالية</h1>
            <nav className="hidden md:flex gap-6 items-center">
              <button onClick={() => setLocation('/')} className="hover:text-yellow-400 transition">الصفحة الرئيسية</button>
              <a href="/#services" className="hover:text-yellow-400 transition">خدماتنا</a>
              <a href="/#about" className="hover:text-yellow-400 transition">عن الشركة</a>
              <button onClick={() => setLocation('/board')} className="hover:text-yellow-400 transition">مجلس الإدارة</button>
              <button onClick={() => setLocation('/offers')} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-bold cursor-pointer">اكتشف العروض</button>
              <a href="/#contact" className="hover:text-yellow-400 transition">اتصل بنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">مجلس الإدارة</h2>
          <p className="text-xl text-gray-600">قيادة متخصصة في مجال الخدمات المالية</p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boardMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              {/* Member Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold mb-1">{member.position}</p>
                <span className="inline-block bg-yellow-400 text-slate-900 px-3 py-1 rounded text-sm font-bold">
                  {member.type}
                </span>
              </div>

              {/* Member Bio */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">عن مجلس الإدارة</h3>
          <p className="text-lg leading-relaxed">
            يتكون مجلس إدارة إسناد المالية من نخبة من الخبراء والمتخصصين في مجال الخدمات المالية والاستثمارية. يجمع المجلس بين الخبرة العملية الواسعة والمؤهلات الأكاديمية العالية، مما يضمن اتخاذ قرارات استراتيجية سليمة وتحقيق أهداف الشركة بكفاءة واحترافية عالية.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">إسناد المالية</h4>
              <p className="text-gray-400">شركة استشارية رائدة في مجال الخدمات المالية والاستثمارية</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setLocation('/')} className="hover:text-yellow-400 transition">الصفحة الرئيسية</button></li>
                <li><a href="/#services" className="hover:text-yellow-400 transition">خدماتنا</a></li>
                <li><button onClick={() => setLocation('/offers')} className="hover:text-yellow-400 transition">العروض</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تواصل معنا</h4>
              <p className="text-gray-400">الهاتف: 00966591354142</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 إسناد المالية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
