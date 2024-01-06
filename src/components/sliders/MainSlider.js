import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/beans.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Welcome to Brioux Falls</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Where Coffee Meets Convenience
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;
