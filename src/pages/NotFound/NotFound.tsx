import { useLocation, Link } from "react-router"; // Nhớ sửa thành react-router-dom
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react"; // Cần cài lucide-react nếu chưa có

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Background Decor - Hiệu ứng nền mờ ảo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center relative z-10 space-y-6 p-6 max-w-md">
        {/* Số 404 lớn với Gradient */}
        <h1 className="text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 animate-pulse">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Trang không tìm thấy</h2>
          <p className="text-muted-foreground text-lg">
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có thể đường dẫn đã bị hỏng hoặc trang đã bị xóa.
          </p>
        </div>

        {/* Nút bấm đẹp hơn */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Home className="mr-2 h-4 w-4" />
            Về trang chủ
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;