import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Slide from "../../Components/Slide";

import bgimg1 from "../../assets/images/bgimg1.jpg";
import bgimg2 from "../../assets/images/bgimg2.jpg";
import bgimg3 from "../../assets/images/bgimg3.jpg";

const Banner = () => {
  return (
    <div className="container px-2 py-5 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="No more searching for your lost valuables! Find them quickly and safely on WhereIsIt."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Has a lost item disrupted your life? Find it in no time with WhereIsIt."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Reunite with your lost loved ones or belongings. WhereIsIt will help you."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
