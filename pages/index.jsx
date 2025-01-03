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
                <img src="images/logo_stamp.jpg" alt="Brioux Falls logo stamped on wood" />
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
                <img src="images/cold_brioux_logo.jpg" alt="Cold Brioux in front of Logo" style={{ borderRadius: '2rem' }}/>
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Latte */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/drinks/latte.jpg" className="has-popup-image">
                      <img src="images/drinks/latte.jpg" alt="hot latte" />
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
                    <a href="images/drinks/iced_mocha.jpg" className="has-popup-image">
                      <img src="images/drinks/iced_mocha.jpg" alt="iced mocha" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Mocha</h5>
                    <div className="subname">
                      Indulge in our rich espresso blended with your choice of milk chocolate, white chocolate, or caramel for a perfectly balanced, sweet and creamy treat. Combined with steamed milk, this comforting classic is available hot or iced, making it the perfect choice for any time of year!
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
                    <a href="images/drinks/caramel_macchiato.jpg" className="has-popup-image">
                      <img src="images/drinks/caramel_macchiato.jpg" alt="caramel macchiato" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Caramel Macchiato</h5>
                    <div className="subname">
                      Experience the sweet symphony of our American-style Caramel Macchiato. Indulge in layers of vanilla-kissed milk and espresso, crowned with a caramel cascade—a blissful journey to coffee perfection, right in your hands.
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
                    <a href="images/drinks/chai_latte.jpg" className="has-popup-image">
                      <img src="images/drinks/chai_latte.jpg" alt="chai tea latte" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chai Tea Latte</h5>
                    <div className="subname">
                      Indulge in the warm spices of our chai tea latte, a delightful blend of aromatic chai and creamy milk. Perfectly balanced for a comforting sip, it’s available hot or iced, making it a cozy choice for any time of year.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Hot Chocolate */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/drinks/hot_chocolate.jpg" className="has-popup-image">
                      <img src="images/drinks/hot_chocolate.jpg" alt="hot chocolate" />
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
                    <a href="images/drinks/matcha_latte.jpg" className="has-popup-image">
                      <img src="images/drinks/matcha_latte.jpg" alt="iced matcha latte" />
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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Blended Frappe */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/drinks/frappe.jpg" className="has-popup-image">
                      <img src="images/drinks/frappe.jpg" alt="blended frappe" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Blended Frappe</h5>
                    <div className="subname">
                      Cool off with our creamy and indulgent frappe, blended to perfection for a smooth, refreshing treat. With a variety of rich flavors to choose from, each sip is a delightful blend of sweetness and icy goodness. Perfect for a quick pick-me-up or a tasty dessert in a cup!
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"> {/* Guava Lamp Lotus */}
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/drinks/guava_lamp_lotus.jpg" className="has-popup-image">
                      <img src="images/drinks/guava_lamp_lotus.jpg" alt="guava lamp lotus" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Guava Lamp Lotus</h5>
                    <div className="subname">
                      Light up your day with the vivid flavors of Flaming Orange and Pink Guava syrups, blended with energizing Pink Lotus and a sparkling finish of club soda. This vibrant drink is an electrifying pick-me-up with a unique twist!
                    </div>
                  </div>
                </div>
              </div>
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
      <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need to Grab and Go
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Place An Order Online for Pickup
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="https://order.dripos.com/Brioux-Falls"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
                target="_blank"
              >
                <span>order now</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
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
                <img src="images/bf_counter.jpg" alt="close up of counter highlighting the espresso machine" />
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
                      <img src="images/choose_icon1.png" alt="coffee beans icon" />
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
                      <img src="images/choose_icon2.png" alt="coffee cup icon" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Farm-Fresh Dairy Excellence</h5>
                      <div className="subname">
                        Discover a world of farm-fresh delight with our curated selection of dairy 
                        essentials. Sourced from a community of dedicated local farmers, our lineup 
                        features wholesome milk, creamy yogurt, and other delightful dairy treats. 
                        Indulge in the richness of nature's goodness, straight from the farm. 
                        Taste the difference of quality and care in every sip and spoonful, as 
                        we bring you the essence of pure dairy bliss - one cup at a time.
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
                  <a href="images/drinks/latte.jpg" className="has-popup-image">
                    <img src="images/drinks/latte.jpg" alt="hot latte" />
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
                  <a href="images/drinks/iced_mocha.jpg" className="has-popup-image">
                    <img src="images/drinks/iced_mocha.jpg" alt="iced mocha" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Mocha</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/berry_pink_lotus.jpg" className="has-popup-image">
                    <img src="images/drinks/berry_pink_lotus.jpg" alt="the berry pink lotus" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">The Berry Pink</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/hot_tea.jpg" className="has-popup-image">
                    <img src="images/drinks/hot_tea.jpg" alt="black tea bag" />
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
                  <a href="images/drinks/fruit_smoothie.jpg" className="has-popup-image">
                    <img src="images/drinks/fruit_smoothie.jpg" alt="fruit smoothie" />
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
                  <a href="images/food/bagel_bacon_breakfast.jpg" className="has-popup-image">
                    <img src="images/food/bagel_bacon_breakfast.jpg" alt="bagel bacon breakfast sandwich" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Bagel Bacon Breakfast Sandwich</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/americano.jpg" className="has-popup-image">
                    <img src="images/drinks/americano.jpg" alt="americano" />
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
                  <a href="images/drinks/guava_lamp_lotus.jpg" className="has-popup-image">
                    <img src="images/drinks/guava_lamp_lotus.jpg" alt="guava lamp lotus" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Guava Lamp Lotus</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/biscuits_and_gravy.jpg" className="has-popup-image">
                    <img src="images/food/biscuits_and_gravy.jpg" alt="biscuits and sausage gravy" />
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
                  <a href="images/drinks/caramel_macchiato.jpg" className="has-popup-image">
                    <img src="images/drinks/caramel_macchiato.jpg" alt="caramel macchiato" />
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
                  <a href="images/drinks/frappe.jpg" className="has-popup-image">
                    <img src="images/drinks/frappe.jpg" alt="blended frappe" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Blended Frappe</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/maple_waffle_bacon_breakfast.jpg" className="has-popup-image">
                    <img src="images/food/maple_waffle_bacon_breakfast.jpg" alt="maple waffle bacon breakfast sandwich" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Maple Waffle Bacon Breakfast Sandwich</h5>
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
