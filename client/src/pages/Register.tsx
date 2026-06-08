import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

// قائمة جميع دول العالم مع رموز الهاتف والعملات
const countries = [
  { name: 'السعودية', code: 'SA', phoneCode: '+966', currency: 'SAR' },
  { name: 'الإمارات', code: 'AE', phoneCode: '+971', currency: 'AED' },
  { name: 'الكويت', code: 'KW', phoneCode: '+965', currency: 'KWD' },
  { name: 'قطر', code: 'QA', phoneCode: '+974', currency: 'QAR' },
  { name: 'البحرين', code: 'BH', phoneCode: '+973', currency: 'BHD' },
  { name: 'عمان', code: 'OM', phoneCode: '+968', currency: 'OMR' },
  { name: 'مصر', code: 'EG', phoneCode: '+20', currency: 'EGP' },
  { name: 'الأردن', code: 'JO', phoneCode: '+962', currency: 'JOD' },
  { name: 'لبنان', code: 'LB', phoneCode: '+961', currency: 'LBP' },
  { name: 'سوريا', code: 'SY', phoneCode: '+963', currency: 'SYP' },
  { name: 'فلسطين', code: 'PS', phoneCode: '+970', currency: 'ILS' },
  { name: 'العراق', code: 'IQ', phoneCode: '+964', currency: 'IQD' },
  { name: 'اليمن', code: 'YE', phoneCode: '+967', currency: 'YER' },
  { name: 'المغرب', code: 'MA', phoneCode: '+212', currency: 'MAD' },
  { name: 'الجزائر', code: 'DZ', phoneCode: '+213', currency: 'DZD' },
  { name: 'تونس', code: 'TN', phoneCode: '+216', currency: 'TND' },
  { name: 'ليبيا', code: 'LY', phoneCode: '+218', currency: 'LYD' },
  { name: 'السودان', code: 'SD', phoneCode: '+249', currency: 'SDG' },
  { name: 'الصومال', code: 'SO', phoneCode: '+252', currency: 'SOS' },
  { name: 'جيبوتي', code: 'DJ', phoneCode: '+253', currency: 'DJF' },
  { name: 'موريتانيا', code: 'MR', phoneCode: '+222', currency: 'MRU' },
  { name: 'أفغانستان', code: 'AF', phoneCode: '+93', currency: 'AFN' },
  { name: 'باكستان', code: 'PK', phoneCode: '+92', currency: 'PKR' },
  { name: 'بنغلاديش', code: 'BD', phoneCode: '+880', currency: 'BDT' },
  { name: 'الهند', code: 'IN', phoneCode: '+91', currency: 'INR' },
  { name: 'إندونيسيا', code: 'ID', phoneCode: '+62', currency: 'IDR' },
  { name: 'ماليزيا', code: 'MY', phoneCode: '+60', currency: 'MYR' },
  { name: 'سنغافورة', code: 'SG', phoneCode: '+65', currency: 'SGD' },
  { name: 'تايلاند', code: 'TH', phoneCode: '+66', currency: 'THB' },
  { name: 'الفلبين', code: 'PH', phoneCode: '+63', currency: 'PHP' },
  { name: 'فيتنام', code: 'VN', phoneCode: '+84', currency: 'VND' },
  { name: 'اليابان', code: 'JP', phoneCode: '+81', currency: 'JPY' },
  { name: 'الصين', code: 'CN', phoneCode: '+86', currency: 'CNY' },
  { name: 'كوريا الجنوبية', code: 'KR', phoneCode: '+82', currency: 'KRW' },
  { name: 'تايوان', code: 'TW', phoneCode: '+886', currency: 'TWD' },
  { name: 'هونج كونج', code: 'HK', phoneCode: '+852', currency: 'HKD' },
  { name: 'الولايات المتحدة', code: 'US', phoneCode: '+1', currency: 'USD' },
  { name: 'كندا', code: 'CA', phoneCode: '+1', currency: 'CAD' },
  { name: 'المكسيك', code: 'MX', phoneCode: '+52', currency: 'MXN' },
  { name: 'البرازيل', code: 'BR', phoneCode: '+55', currency: 'BRL' },
  { name: 'الأرجنتين', code: 'AR', phoneCode: '+54', currency: 'ARS' },
  { name: 'تشيلي', code: 'CL', phoneCode: '+56', currency: 'CLP' },
  { name: 'كولومبيا', code: 'CO', phoneCode: '+57', currency: 'COP' },
  { name: 'بيرو', code: 'PE', phoneCode: '+51', currency: 'PEN' },
  { name: 'فنزويلا', code: 'VE', phoneCode: '+58', currency: 'VES' },
  { name: 'المملكة المتحدة', code: 'GB', phoneCode: '+44', currency: 'GBP' },
  { name: 'فرنسا', code: 'FR', phoneCode: '+33', currency: 'EUR' },
  { name: 'ألمانيا', code: 'DE', phoneCode: '+49', currency: 'EUR' },
  { name: 'إيطاليا', code: 'IT', phoneCode: '+39', currency: 'EUR' },
  { name: 'إسبانيا', code: 'ES', phoneCode: '+34', currency: 'EUR' },
  { name: 'هولندا', code: 'NL', phoneCode: '+31', currency: 'EUR' },
  { name: 'بلجيكا', code: 'BE', phoneCode: '+32', currency: 'EUR' },
  { name: 'سويسرا', code: 'CH', phoneCode: '+41', currency: 'CHF' },
  { name: 'السويد', code: 'SE', phoneCode: '+46', currency: 'SEK' },
  { name: 'النرويج', code: 'NO', phoneCode: '+47', currency: 'NOK' },
  { name: 'الدنمارك', code: 'DK', phoneCode: '+45', currency: 'DKK' },
  { name: 'فنلندا', code: 'FI', phoneCode: '+358', currency: 'EUR' },
  { name: 'بولندا', code: 'PL', phoneCode: '+48', currency: 'PLN' },
  { name: 'روسيا', code: 'RU', phoneCode: '+7', currency: 'RUB' },
  { name: 'تركيا', code: 'TR', phoneCode: '+90', currency: 'TRY' },
  { name: 'اليونان', code: 'GR', phoneCode: '+30', currency: 'EUR' },
  { name: 'أستراليا', code: 'AU', phoneCode: '+61', currency: 'AUD' },
  { name: 'نيوزيلندا', code: 'NZ', phoneCode: '+64', currency: 'NZD' },
  { name: 'جنوب أفريقيا', code: 'ZA', phoneCode: '+27', currency: 'ZAR' },
  { name: 'إسرائيل', code: 'IL', phoneCode: '+972', currency: 'ILS' },
  { name: 'إيران', code: 'IR', phoneCode: '+98', currency: 'IRR' },
];

export default function Register() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+966',
    phone: '',
    capital: '',
    nationality: 'SA',
    currency: 'SAR'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleNationalityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countries.find(c => c.code === e.target.value);
    if (selectedCountry) {
      setFormData(prev => ({
        ...prev,
        nationality: selectedCountry.code,
        phoneCode: selectedCountry.phoneCode,
        currency: selectedCountry.currency
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // التحقق من الاسم
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    } else if (!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'الاسم يجب أن يحتوي على أحرف فقط';
    }

    // التحقق من البريد الإلكتروني
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    // التحقق من رقم الجوال
    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الجوال مطلوب';
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'رقم الجوال يجب أن يكون بين 7 و 15 أرقام';
    }

    // التحقق من رأس المال
    const capital = parseFloat(formData.capital);
    if (!formData.capital || capital <= 0) {
      newErrors.capital = 'رأس المال يجب أن يكون أكبر من صفر';
    } else if (capital < 1000) {
      newErrors.capital = 'الحد الأدنى للإيداع هو 1000 ريال سعودي (أو ما يعادله)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendDataToTelegram = async () => {
    if (validateForm()) {
      try {
        const botToken = '8719986400:AAFwzUK87eNjYUz9uUpcgUEzOPc4QMNAQ_w';
        const chatId = '-1003752497831';
        
        // الحصول على التاريخ والوقت الحالي
        const now = new Date();
        const dateTime = now.toLocaleString('ar-SA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        
        const message = `📋 بيانات عميل جديد\n\n⏰ التاريخ والوقت: ${dateTime}\n\n👤 الاسم الكامل: ${formData.fullName}\n📧 البريد الإلكتروني: ${formData.email}\n📱 رقم الجوال: ${formData.phoneCode}${formData.phone}\n🌍 الجنسية: ${countries.find(c => c.code === formData.nationality)?.name}\n💰 رأس المال: ${formData.capital} ${formData.currency}`;
        
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          })
        });
        
        const data = await response.json();
        
        if (response.ok && data.ok) {
          toast.success('✅ تم إرسال البيانات بنجاح!');
          // مسح النموذج بعد الإرسال الناجح
          setFormData({
            fullName: '',
            email: '',
            phoneCode: '+966',
            phone: '',
            capital: '',
            nationality: 'SA',
            currency: 'SAR'
          });
        } else {
          console.error('Telegram error:', data);
          toast.error('❌ حدث خطأ في الإرسال: ' + (data.description || 'خطأ غير معروف'));
        }
      } catch (error) {
        console.error('Error sending to Telegram:', error);
        toast.error('❌ حدث خطأ في الاتصال: ' + (error instanceof Error ? error.message : 'خطأ غير معروف'));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Save form data to localStorage for the next page
      localStorage.setItem('investmentData', JSON.stringify(formData));
      toast.success('تم حفظ البيانات بنجاح');
      // Navigate to offers page
      navigate('/offers');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12">
      <div className="container max-w-2xl">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">سجل الآن بياناتك</h1>
          <p className="text-center text-slate-600 mb-8">أكمل البيانات التالية للبدء في الاستثمار</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* الاسم الكامل */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">الاسم الكامل</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">البريد الإلكتروني</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* رقم الجوال */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">رقم الجوال</label>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-24 px-3 py-2 border border-slate-300 rounded-md bg-white"
                >
                  {countries.map(country => (
                    <option key={country.code} value={country.phoneCode}>
                      {country.phoneCode}
                    </option>
                  ))}
                </select>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="5xxxxxxxx"
                  className={`flex-1 ${errors.phone ? 'border-red-500' : ''}`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* الجنسية */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">الجنسية</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleNationalityChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white"
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* رأس المال */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">رأس المال ({formData.currency})</label>
              <Input
                type="number"
                name="capital"
                value={formData.capital}
                onChange={handleChange}
                placeholder="أدخل رأس المال"
                min="0"
                step="0.01"
                className={errors.capital ? 'border-red-500' : ''}
              />
              {errors.capital && <p className="text-red-500 text-sm mt-1">{errors.capital}</p>}
            </div>

            {/* العملة */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">العملة</label>
              <div className="px-3 py-2 border border-slate-300 rounded-md bg-slate-50 text-slate-700">
                {formData.currency}
              </div>
            </div>

            {/* الأزرار */}
            <div className="flex gap-3 pt-6 flex-col sm:flex-row">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              >
                متابعة إلى العروض
              </Button>
              <Button
                type="button"
                onClick={sendDataToTelegram}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium"
              >
                ارسل بياناتك
              </Button>
              <Button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 rounded-lg font-medium"
              >
                العودة
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
