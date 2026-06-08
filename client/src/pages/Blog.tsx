import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, X } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'مفهوم الحوكمة وأسباب ظهورها',
    category: 'الحوكمة',
    excerpt: 'فهم شامل لمبادئ الحوكمة الحديثة والعوامل التي أدت إلى ظهورها في المؤسسات المالية',
    content: `الحوكمة هي مجموعة من الأنظمة والعمليات والقوانين التي تحكم كيفية إدارة المؤسسة. تشمل الحوكمة الهياكل والعمليات والأشخاص الذين يديرون المؤسسة نحو تحقيق أهدافها.

أسباب ظهور الحوكمة:
- الفضائح المالية الكبرى التي هزت الاقتصاد العالمي
- الحاجة إلى حماية حقوق المساهمين والمستثمرين
- تعقيد العمليات المالية والإدارية
- الضغط من الجهات التنظيمية والرقابية
- الحاجة إلى بناء الثقة مع أصحاب المصالح

الحوكمة الجيدة تضمن:
- الشفافية والمساءلة
- الإدارة الفعالة للمخاطر
- الامتثال للقوانين واللوائح
- الأداء المستدام على المدى الطويل`,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/blog-saudi-businessman-1.png-VmJoXvUdLq8q7FnEh8526e.webp',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'مبررات اللجوء إلى تطبيق الحوكمة',
    category: 'الامتثال',
    excerpt: 'الأسباب الرئيسية التي تدفع المؤسسات إلى تطبيق معايير الحوكمة الدولية',
    content: `تطبيق الحوكمة ليس خياراً بل ضرورة حتمية في عالم الأعمال الحديث. هناك عدة مبررات قوية لتطبيق الحوكمة:

المبررات الاقتصادية:
- تحسين الأداء المالي والعائد على الاستثمار
- جذب المستثمرين المؤسسيين
- تقليل تكاليف التمويل
- زيادة القيمة السوقية للمؤسسة

المبررات القانونية والتنظيمية:
- الامتثال للقوانين واللوائح الحكومية
- تلبية متطلبات الجهات الرقابية
- تجنب العقوبات والغرامات
- الحصول على التراخيص والموافقات

المبررات الاجتماعية:
- بناء الثقة مع أصحاب المصالح
- تحسين سمعة المؤسسة
- المسؤولية الاجتماعية
- الاستدامة طويلة الأجل`,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/blog-saudi-businessman-2.png-ijBxAPbmLjei3eMs4ExpCL.webp',
    date: '2024-01-20'
  },
  {
    id: 3,
    title: 'مبادئ ومحددات الحوكمة',
    category: 'المبادئ',
    excerpt: 'استكشاف المبادئ الأساسية والمحددات الرئيسية لنظام الحوكمة الفعال',
    content: `المبادئ الأساسية للحوكمة:

1. المساءلة (Accountability):
- تحمل المسؤولية عن القرارات والأفعال
- الإفصاح الشامل عن الأداء
- الخضوع للمراجعة والتدقيق

2. الشفافية (Transparency):
- الإفصاح الكامل عن المعلومات المالية
- وضوح السياسات والإجراءات
- إتاحة المعلومات لأصحاب المصالح

3. النزاهة (Integrity):
- الالتزام بالقيم الأخلاقية
- الصدق والأمانة في التعاملات
- مكافحة الفساد والرشوة

4. المسؤولية (Responsibility):
- تحمل مسؤولية القرارات
- الاهتمام بمصالح جميع الأطراف
- الالتزام بالقوانين واللوائح

محددات الحوكمة:
- الهيكل التنظيمي
- لجان الإدارة
- نظام المراقبة الداخلية
- سياسات وإجراءات العمل`,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/blog-saudi-businessman-3.png-4GKZNpywctVoB5mLHR58CU.webp',
    date: '2024-01-25'
  },
  {
    id: 4,
    title: 'أهداف وإيجابيات الحوكمة وكيفية تطبيقها',
    category: 'التطبيق',
    excerpt: 'الأهداف الرئيسية والفوائد المحققة من تطبيق الحوكمة بشكل فعال',
    content: `أهداف الحوكمة:

1. حماية حقوق المساهمين والمستثمرين
2. ضمان الامتثال للقوانين واللوائح
3. تحسين الأداء المالي والتشغيلي
4. بناء الثقة مع أصحاب المصالح
5. إدارة المخاطر بشكل فعال
6. تحقيق الاستدامة طويلة الأجل

إيجابيات الحوكمة:
- تحسين جودة القرارات الإدارية
- زيادة الكفاءة التشغيلية
- تقليل الفساد والانحرافات
- جذب الاستثمارات الأجنبية
- تحسين الأداء المالي
- زيادة قيمة المؤسسة

كيفية تطبيق الحوكمة:

1. وضع إطار عمل شامل:
- تحديد المبادئ والقيم
- وضع السياسات والإجراءات
- تحديد المسؤوليات والصلاحيات

2. تشكيل الهياكل الإدارية:
- تشكيل مجلس إدارة قوي
- إنشاء لجان متخصصة
- تعيين مسؤولي الامتثال والمراجعة

3. تطبيق الأنظمة والعمليات:
- نظام المراقبة الداخلية
- نظام المراجعة والتدقيق
- نظام إدارة المخاطر

4. التدريب والتوعية:
- تدريب الموظفين على الحوكمة
- نشر ثقافة الامتثال
- التطوير المستمر للكفاءات`,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663739243940/UYCmfkNryPdSf9yTVfuZ6X/blog-saudi-businessman-4.png-Jcos9HQACcWKpCvcVLyyEa.webp',
    date: '2024-02-01'
  }
];

export default function Blog() {
  const [, setLocation] = useLocation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-background">
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
              <button onClick={() => setLocation('/blog')} className="hover:text-yellow-400 transition">مدونة</button>
              <button onClick={() => setLocation('/offers')} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-bold cursor-pointer">اكتشف العروض</button>
              <a href="/#contact" className="hover:text-yellow-400 transition">اتصل بنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">مدونة إسناد المالية</h1>
          <p className="text-xl text-blue-100">اكتشف أحدث المقالات والأفكار حول الحوكمة والامتثال المالي</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(post.title);
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>

                <h2 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  اقرأ المزيد
                  <ArrowRight className="mr-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for Full Post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-card-foreground">{selectedPost.title}</h2>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-muted-foreground hover:text-foreground text-2xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(selectedPost.title);
                }}
              />

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <span className="text-sm text-muted-foreground">{selectedPost.date}</span>
              </div>

              {/* Full Content */}
              <div className="prose prose-invert max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-card-foreground mb-4 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 إسناد المالية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
