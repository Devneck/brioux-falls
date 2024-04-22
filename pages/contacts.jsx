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
