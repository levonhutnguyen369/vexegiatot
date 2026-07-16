
import BookingTabs from './BookingTabs'
import heroImage from '/banner.png'

const HeroSection = () => {
  return (
    <>
      <section className="relative w-full min-h-[500px] flex items-center justify-center py-20">

        {/* 1. Background Image: Tuyệt đối để nằm chìm bên dưới */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Vexetot"
            className="w-full h-full object-cover"
          />
          {/* (Tuỳ chọn) Lớp phủ tối màu để BookingTabs nổi bật hơn nếu ảnh sáng */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* 2. Content: Tương đối (relative) để chiếm diện tích thật */}
        {/* Bỏ class 'absolute' ở đây để div này đẩy chiều cao cha giãn ra khi zoom */}
        <div className="flex justify-center relative z-10 w-full px-4">
          <BookingTabs className='w-[70%] bg-white flex items-center rounded-xl font-sans shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300'/>
        </div>

      </section>

    </>
  )
}

export default HeroSection