// import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/cupofcoffee.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Brioux Falls
                </div>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Welcome to Brioux Falls, a place where great coffee is just the beginning.
                  We're not your typical coffee shop; we're a destination
                  within <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link> designed for the busy on-the-go lifestyle.
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
                      <h5 className="name">Discovering Our Niche</h5>
                      <div className="subname">
                        Our journey began with a vision—to create a coffee shop concept that's 
                        truly exceptional. Located within <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link>, Brioux Falls
                        is strategically placed to serve busy professionals, visitors, and
                        residents looking for quality coffee on the go.
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
                      <h5 className="name">Personalized Service</h5>
                      <div className="subname">
                        At Brioux Falls, we value authentic connections. Our friendly,
                        knowledgeable staff take orders personally and offer recommendations 
                        to enhance your coffee experience.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/service_icon2.png" alt="coffee cup icon" />
                    </div>
                    <div className="desc">
                      <h5 className="name">More Than Coffee</h5>
                      <div className="subname">
                        While we're known for our exceptional coffee, Brioux Falls offers 
                        a selection of grab-and-go options, ensuring you can find 
                        a quick and satisfying bite to accompany your coffee.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/parallax_icon1.png" alt="coffee beans icon" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Growing With the Community</h5>
                      <div className="subname">
                        Brioux Falls is adaptable and ready to evolve with the community. 
                        As <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link> and <Link href="https://www.siouxfalls.gov/activities-recreation/parks-trails/parks/falls" target="_blank">Falls Park</Link> continue 
                        to grow, so will we, remaining an integral part of this dynamic environment.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p style={{ marginBottom: '1rem' }}>
                  We invite you to make Brioux Falls your destination for quality coffee and 
                  quick bites. At Brioux Falls, we're all about convenience and a great 
                  coffee experience, whether you're grabbing and going or staying for a moment.
                </p>
              </div>
              <Link
                href="menu-coffee"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>our menu</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/cupofbeans.jpg" alt="steaming cup of coffee beans" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}
      {/* Section CTA */}
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
    </Layouts>
  );
};
export default About;
