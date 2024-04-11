import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Discover Brioux Falls: <br />
                  Brewing Excellence in <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link>
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Welcome to Brioux Falls, where exceptional coffee meets convenience
                  with the vibrant pulse of <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link>.
                  Born from a vision to redefine the coffee experience, our strategically located 
                  destination caters to the busy on-the-go lifestyle of professionals, visitors, and residents. 
                  At Brioux Falls, personalized service is our hallmark—our friendly staff takes orders personally, 
                  creating authentic connections. 
                  As <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link> and <Link href="https://www.siouxfalls.gov/activities-recreation/parks-trails/parks/falls" target="_blank">Falls Park</Link> evolve, 
                  so does Brioux Falls, seamlessly adapting and growing with the community.
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/logo_stamp.jpg" alt="image" />
                <div>
                  Make Brioux Falls your go-to destination for quality coffee and quick bites
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
              <div
                className="kf-about-image element-anim-1 scroll-animate berry"
                data-animate="active"
              >
                <img src="images/lotus_berry_pink.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Brioux Falls Recommended Drinks
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(images/menu_logo.png)" }}
          >
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Americano * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu6.jpg" className="has-popup-image">
                      <img src="images/menu6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Americano</h5>
                    <div className="subname">
                      Espresso perfection meets hot water for a bold, smooth Americano experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Long Black * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu1.jpg" className="has-popup-image">
                      <img src="images/menu1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Long Black</h5>
                    <div className="subname">
                      Robust espresso merged with hot water, delivering a bold, full-flavored coffee experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Matcha Latte * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu2.jpg" className="has-popup-image">
                      <img src="images/menu2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Matcha Latte</h5>
                    <div className="subname">
                      Vibrant green tea powder meets steamed milk for a rich, velvety fusion of earthy and creamy goodness
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Unflavored Latte * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu2.jpg" className="has-popup-image">
                      <img src="images/menu2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Unflavored Latte</h5>
                    <div className="subname">
                      Smooth espresso balanced with steamed milk, offering a pure and comforting coffee indulgence
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Flavored Latte */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/latte_hot.jpg" className="has-popup-image">
                      <img src="images/latte_hot.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Flavored Latte</h5>
                    <div className="subname">
                      Espresso blended with steamed milk, offering a delightful twist with your choice of flavor infusion
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Mocha */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/mocha_iced.jpg" className="has-popup-image">
                      <img src="images/mocha_iced.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Mocha</h5>
                    <div className="subname">
                      Decadent blend of espresso, rich chocolate, and velvety steamed milk for an indulgent, irresistible delight
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Chai Tea Latte */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/chai_tea.jpg" className="has-popup-image">
                      <img src="images/chai_tea.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chai Tea Latte</h5>
                    <div className="subname">
                      A warming embrace of spiced black tea and steamed milk, crafting a cozy and flavorful indulgence
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Caramel Macchiato */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/caramel_macch.jpg" className="has-popup-image">
                      <img src="images/caramel_macch.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Caramel Macchiato</h5>
                    <div className="subname">
                      Luscious caramel drizzle over espresso and steamed milk for a sweet, layered coffee experience
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Breve * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu6.jpg" className="has-popup-image">
                      <img src="images/menu6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Breve</h5>
                    <div className="subname">
                      Creamy indulgence with espresso and steamed half-and-half, delivering a rich, velvety coffee delight
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Cappuccino * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu1.jpg" className="has-popup-image">
                      <img src="images/menu1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Cappuccino</h5>
                    <div className="subname">
                      Perfect harmony of espresso, steamed milk, and a velvety foam, creating a rich, satisfying blend
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Hot Chocolate */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/hot_choc.jpg" className="has-popup-image">
                      <img src="images/hot_choc.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Hot Chocolate</h5>
                    <div className="subname">
                      A comforting blend of rich cocoa and steamed milk, creating a warm, indulgent treat for any occasion
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Matcha Latte */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/matcha_latte_iced.jpg" className="has-popup-image">
                      <img src="images/matcha_latte_iced.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Matcha Latte</h5>
                    <div className="subname">
                      Vibrant green tea powder meets steamed milk for a rich, velvety fusion of earthy and creamy goodness
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Hot Tea (sachets) * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu4.jpg" className="has-popup-image">
                      <img src="images/menu4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Hot Tea</h5>
                    <div className="subname">
                      Elevate your experience with our premium selection of aromatic and soothing tea varieties
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Blended Mocha Frappe */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/frappe-mocha.jpg" className="has-popup-image">
                      <img src="images/frappe-mocha.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Blended Mocha Frappe</h5>
                    <div className="subname">
                      Indulge in a frosty fusion of rich coffee, ice, and cream, creating a deliciously refreshing treat
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Jet Tea Smoothie * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu6.jpg" className="has-popup-image">
                      <img src="images/menu6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jet Tea Smoothie</h5>
                    <div className="subname">
                      A velvety fusion of vibrant fruit flavors, ice, and a smooth base for a refreshing, tropical delight
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Shark Bait * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu3.jpg" className="has-popup-image">
                      <img src="images/menu3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Shark Bait</h5>
                    <div className="subname">
                      Lotus Blue Energy, strawberry syrup, and ice unite for a refreshing energy splash
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* The Berry Pink * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu4.jpg" className="has-popup-image">
                      <img src="images/menu4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">The Berry Pink</h5>
                    <div className="subname">
                      Lotus Pink Energy, strawberry syrup, raspberry syrup, and ice for a vibrant burst
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Green Apple */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/lotus_green_apple.jpg" className="has-popup-image">
                      <img src="images/lotus_green_apple.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Green Apple</h5>
                    <div className="subname">
                      Lotus White Energy, sweet & sour mix, green apple, lime syrups over ice
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* The Patriot * /}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu5.jpg" className="has-popup-image">
                      <img src="images/menu5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">The Patriot</h5>
                    <div className="subname">
                      Lotus Blue Energy, white chocolate, strawberry, and raspberry over ice—a star-spangled blend
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex' }}>
            <Link
              href="menu-coffee"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
              style={{ margin: '1rem auto' }}
            >
              <span>our menu</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/bf_counter.jpg" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Brioux Falls: Elevate Your Coffee Experience
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Discover Brioux Falls, an urban grab-and-go coffee stop nestled in the heart 
                  of The Steel District, downtown Sioux Falls. Savor premium handcrafted coffee 
                  and gourmet options crafted with care. With a prime location, we offer a 
                  dynamic experience, welcoming you to an oasis where each cup tells a story of 
                  excellence. Choose Brioux Falls for a quick, delicious, and elevated coffee 
                  experience in the vibrant heart of the city.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Driven Perfection in Every Sip</h5>
                      <div className="subname">
                        Savor the exceptional with our coffee, proudly sourced from <Link href="https://www.drivencoffee.com/about-driven-coffee-roasters/" target="_blank">Driven Coffee Roasters</Link>. 
                        Immerse yourself in rich, meticulously roasted beans that deliver a symphony 
                        of flavor, embodying the essence of quality and craftsmanship in every cup.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Farm-Fresh Dairy Excellence</h5>
                      <div className="subname">
                        Discover a world of farm-fresh delight with our curated selection of dairy 
                        essentials. Sourced from a community of dedicated local farmers, our lineup 
                        features wholesome milk, creamy yogurt, and other delightful dairy treats. 
                        Indulge in the richness of nature's goodness, straight from the farm. 
                        Taste the difference of quality and care in every sip and spoonful, as 
                        we bring you the essence of pure dairy bliss to you - one cup at a time.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/latte_hot.jpg" className="has-popup-image">
                    <img src="images/latte_hot.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/mocha_iced.jpg" className="has-popup-image">
                    <img src="images/mocha_iced.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Mocha</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/lotus_shark_bite.jpg" className="has-popup-image">
                    <img src="images/lotus_shark_bite.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Shark Bite</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/black_tea.jpg" className="has-popup-image">
                    <img src="images/black_tea.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Hot Tea</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/fruit-smoothie.jpg" className="has-popup-image">
                    <img src="images/fruit-smoothie.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Fruit Smoothie</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/americano-coffee.jpg" className="has-popup-image">
                    <img src="images/americano-coffee.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Americano</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/biscuits-full.jpg" className="has-popup-image">
                    <img src="images/biscuits-full.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Biscuits & Gravy</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/caramel_macch.jpg" className="has-popup-image">
                    <img src="images/caramel_macch.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Caramel Macchiato</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/frappe-vanilla.jpg" className="has-popup-image">
                    <img src="images/frappe-vanilla.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Blended Vanilla Frappe</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/sand-bagel.jpg" className="has-popup-image">
                    <img src="images/sand-bagel.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Breakfast Sandwich</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Layouts>
  );
};
export default Index;
