// components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { testimonials } from "../data/data";

const Testimonial = () => {
  return (
    <section className="py-10 bg-gray-100" id="testimonials">
      <div className="2xl:max-w-[1100px] xl:max-w-[930px] px-5 xl:px-0 mx-auto">
        <h1 className="text-4xl font-mono font-bold border-b-4 border-blue-300 w-fit pb-2">
          Testimonials
        </h1>
        <p className="mt-6 text-lg xl:text-xl text-gray-700 ">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center mt-12">
                <Image
                  src={t.image}
                  width={80}
                  height={80}
                  alt={t.name}
                  className="object-cover object-top h-[80px] w-[80px] rounded-full border-4 border-gray-200/50 mb-3 flex mx-auto my-4"
                />

                <p className="italic text-gray-600 mb-2">"{t.text}"</p>
                <h4 className="font-semibold text-blue-600">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
