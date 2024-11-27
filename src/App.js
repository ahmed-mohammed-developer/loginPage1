import './App.css'; // استيراد ملفات CSS للتنسيق
import LoginPage from './component/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // استيراد ملفات CSS الخاصة بـ Bootstrap
function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App; // تصدير المكون App للاستخدام في ملفات أخرى
