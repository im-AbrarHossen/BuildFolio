import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider2 from "../assets/images/slider2.webp";
import Slider3 from "../assets/images/slider3.webp";
import Slider4 from "../assets/images/slider4.webp";
import Slider5 from "../assets/images/slider5.webp"; // Replace with your image paths
import Slider6 from "../assets/images/slider6.webp";

const Banner = () => {
    return (
        <div className="relative w-11/12 mx-auto mt-[150px] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2000, // 3 seconds per slide
                    disableOnInteraction: false,
                }}
                loop={true} // Enable infinite loop
            >
                <SwiperSlide>
                    <img
                        className="lg:h-[400px] h-[200px] w-full object-cover"
                        src={Slider2}
                        alt="Building 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="lg:h-[400px] h-[200px] w-full object-cover"
                        src={Slider3}
                        alt="Building 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="lg:h-[400px] h-[200px] w-full object-cover"
                        src={Slider4}
                        alt="Building 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="lg:h-[400px] h-[200px] w-full object-cover"
                        src={Slider5}
                        alt="Building 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="lg:h-[400px] h-[200px] w-full object-cover"
                        src={Slider6}
                        alt="Building 4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;