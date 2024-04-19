import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Contacts = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/latteart.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Us
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon1.png" alt="" />*/}
                  <i className="las la-map-marked-alt" />
                </div>
                <div className="desc">
                  <h5 className="name">Main Location</h5>
                  <ul>
                    <li>
                      <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link><br />
                      150 E. 4th Place, Suite 202<br />
                      Sioux Falls, South Dakota 57104
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon2.png" alt="" />*/}
                  <i className="las la-envelope-open-text" />
                </div>
                <div className="desc">
                  <h5 className="name">Email Address</h5>
                  <ul>
                    <li>
                      info@briouxfalls.coffee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div
                className="kf-contacts-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  {/*<img src="images/contact_icon3.png" alt="" />*/}
                  <i className="las la-headset" />
                </div>
                <div className="desc">
                  <h5 className="name">Phone Number</h5>
                  <ul>
                    <li>
                      (605) 215 0636 <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section kf-map section-bg">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11566.207624830295!2d-96.7243138!3d43.5533817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb53ed5bba68f%3A0xc26fd4ab8cffda9!2sBrioux%20Falls!5e0!3m2!1sen!2sus!4v1705280810992!5m2!1sen!2sus"
            style={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <section className="section kf-contacts-form">
        <div className="container" style={{ padding: '3rem 0 0 0' }}>
          <div className="kf-titles">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              How to find us
            </div>
            <img src="images/steel-district-map.png" alt="map of the steel district" style={{ width: '100%', margin: '2rem 0' }}/>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Steel District Visitor Parking Instructions
            </h3>
          </div>
          <div
            className="kf-text element-anim-1 scroll-animate"
            data-animate="active"
          >
            <p>
              Enter The Steel District off E. 6th Street, take a right to access the entrance
              of the parking ramp. Stay to the right while entering the parking ramp and proceed
              up the ramp and to the right.
            </p>
            <h5>
              Please only park on levels 2, 3 & 4
            </h5>
            <p>
              Skywalk access is located on Level 3 of the parking ramp. Use the Skywalk access to enter
              the Office tower.
            </p>
          </div>
          <hr />
          <div className="kf-titles">
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Walking Instructions
            </h3>
          </div>
          <div
            className="kf-text element-anim-1 scroll-animate"
            data-animate="active"
          >
            <h5>
              Garage Entrance
            </h5>
            <p>
              Enter The Steel District off E 4th Place north of the parking ramp (Identified as
              "Deliveries Only" in the map, construction may be in progress in the area). Enter
              through the first door after the bricks/retail strip on the right to gain access
              to the parking garage. Take stairs or elevator to 3rd floor of parking garage.
              Go out into the parking garage and use the Skywalk access to enter the Office tower.
            </p>
            <h5>
              Office Tower Entrance
            </h5>
            <p>
              Enter The Steel District off E 4th Place just north of the parking ramp (Identified as
              "Deliveries Only" in the map, construction may be in progress in the area). Enter
              the office tower main entrance on the left to gain access to the Office tower.
              Take stairs or elevator to 2nd floor of the Office tower. Take a left and follow
              the hall all the way to the end on the North side, take a left to find Brioux Falls.
            </p>
          </div>
        </div>
      </section>
      {/* Section Contacts Form */}
      {/* <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Contact Us</div>
              <h3 className="kf-title">Send Us Message</h3>
            </div>
            <form id="cform" method="post">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="text" name="name" placeholder="Full Name" />
                    <i className="far fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <i className="fas fa-at" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="kf-field">
                    <input type="tel" name="tel" placeholder="Phone Number" />
                    <i className="fas fa-mobile-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <a
                      href="#"
                      className="kf-btn"
                      onclick="$('#cform').submit(); return false;"
                    >
                      <span>Send us message</span>
                      <i className="fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Insta Carousel */}
      {/* <InstaCarousel /> */}
      {/* Section Brands */}
      {/* <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layouts>
  );
};
export default Contacts;
