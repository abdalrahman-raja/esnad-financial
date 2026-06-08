import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function BotDashboard() {
  const [botToken, setBotToken] = useState('8719986400:AAFwzUK87eNjYUz9uUpcgUEzOPc4QMNAQ_w');
  const [chatId, setChatId] = useState('-1003752497831');
  const [testMessage, setTestMessage] = useState('اختبار البوت - رسالة تجريبية');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString('ar-SA');
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev]);
  };

  const testBotConnection = async () => {
    setLoading(true);
    addLog('🔄 جاري اختبار اتصال البوت...');
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
      const data = await response.json();
      
      if (data.ok) {
        addLog(`✅ البوت متصل بنجاح: @${data.result.username}`);
        toast.success('البوت متصل بنجاح!');
      } else {
        addLog(`❌ خطأ: ${data.description}`);
        toast.error(`خطأ: ${data.description}`);
      }
    } catch (error) {
      addLog(`❌ خطأ في الاتصال: ${error instanceof Error ? error.message : 'خطأ غير معروف'}`);
      toast.error('خطأ في الاتصال');
    } finally {
      setLoading(false);
    }
  };

  const sendTestMessage = async () => {
    if (!testMessage.trim()) {
      toast.error('أدخل رسالة للإرسال');
      return;
    }

    setLoading(true);
    addLog('📤 جاري إرسال الرسالة...');
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: testMessage
        })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        addLog(`✅ تم إرسال الرسالة بنجاح (ID: ${data.result.message_id})`);
        toast.success('تم إرسال الرسالة بنجاح!');
      } else {
        addLog(`❌ خطأ في الإرسال: ${data.description}`);
        toast.error(`خطأ: ${data.description}`);
      }
    } catch (error) {
      addLog(`❌ خطأ في الاتصال: ${error instanceof Error ? error.message : 'خطأ غير معروف'}`);
      toast.error('خطأ في الاتصال');
    } finally {
      setLoading(false);
    }
  };

  const getUpdates = async () => {
    setLoading(true);
    addLog('📨 جاري جلب التحديثات...');
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates`);
      const data = await response.json();
      
      if (data.ok) {
        if (data.result.length === 0) {
          addLog('ℹ️ لا توجد تحديثات جديدة');
        } else {
          addLog(`✅ تم جلب ${data.result.length} تحديث(ات)`);
          data.result.forEach((update: any) => {
            if (update.message) {
              addLog(`📩 رسالة من: ${update.message.chat.id} - ${update.message.text}`);
            }
          });
        }
      } else {
        addLog(`❌ خطأ: ${data.description}`);
      }
    } catch (error) {
      addLog(`❌ خطأ في الاتصال: ${error instanceof Error ? error.message : 'خطأ غير معروف'}`);
    } finally {
      setLoading(false);
    }
  };

  const clearLogs = () => {
    setLogs([]);
    addLog('🗑️ تم مسح السجلات');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">لوحة تحكم البوت</h1>
          <p className="text-center text-slate-600 mb-8">اختبر اتصال البوت وأرسل رسائل تجريبية</p>

          {/* بيانات البوت */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-slate-900">بيانات البوت</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Token البوت</label>
                <Input
                  type="text"
                  value={botToken}
                  onChange={(e) => setBotToken(e.target.value)}
                  className="font-mono text-xs"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">معرف الدردشة (Chat ID)</label>
                <Input
                  type="text"
                  value={chatId}
                  onChange={(e) => setChatId(e.target.value)}
                  placeholder="أدخل معرف الدردشة"
                />
              </div>
            </div>
          </div>

          {/* أزرار الاختبار */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-slate-900">اختبار الاتصال</h2>
            
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={testBotConnection}
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {loading ? 'جاري...' : '✓ اختبر اتصال البوت'}
              </Button>

              <Button
                onClick={getUpdates}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? 'جاري...' : '📨 جلب التحديثات'}
              </Button>

              <Button
                onClick={clearLogs}
                className="bg-slate-600 hover:bg-slate-700 text-white"
              >
                🗑️ مسح السجلات
              </Button>
            </div>
          </div>

          {/* إرسال رسالة تجريبية */}
          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-slate-900">إرسال رسالة تجريبية</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">نص الرسالة</label>
                <textarea
                  value={testMessage}
                  onChange={(e) => setTestMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md"
                  rows={4}
                />
              </div>

              <Button
                onClick={sendTestMessage}
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2"
              >
                {loading ? 'جاري الإرسال...' : '📤 أرسل الرسالة'}
              </Button>
            </div>
          </div>

          {/* السجلات */}
          <div className="bg-slate-900 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-white">السجلات</h2>
            
            <div className="bg-slate-950 rounded p-4 h-64 overflow-y-auto font-mono text-xs text-green-400">
              {logs.length === 0 ? (
                <p className="text-slate-500">لا توجد سجلات حتى الآن</p>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className="mb-2 break-words">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
