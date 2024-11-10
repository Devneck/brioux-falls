import Link from "next/link";

const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/bf-logo-white.svg" alt="Brioux Falls logo" style={{ maxHeight: 'fit-content', maxWidth: '16rem' }}/>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                <li>
                  Mon - Friday
                  <em>07:00 am - 02:00pm</em>
                </li>
                <li>
                  <strong>Memorial Day 2024 Closed</strong>
                </li>
                <li>
                  <strong>4th & 5th of July 2024 Closed</strong>
                </li>
                <li>
                  <strong>Labor Day 2024 Closed</strong>
                </li>
                <li>
                  <strong>Thanksgiving Closed</strong>
                </li>
                <li>
                  <strong>Black Friday 2024 Closed</strong>
                </li>
                <li>
                  <strong>Dec 13-16 Closed</strong>
                </li>
                <li>
                  <strong>Christmas Closed</strong>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em> <Link href="https://www.thesteeldistrict.com/" target="_blank">The Steel District</Link><br />150 E. 4th Place, Suite 202<br />Sioux Falls, SD 57104
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em> info@briouxfalls.coffee
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em> (605) 215 0636
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="images/storefront.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/storefront.jpg" alt="storefont view" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/steam_milk_2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/steam_milk_2.jpg" alt="barista steaming milk" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grinds.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grinds.jpg" alt="grinder with fresh grounds" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/barista.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/barista.jpg" alt="barista hard at work" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/hot_drink.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/hot_drink.jpg" alt="branded hot cup in front of tile backsplash" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/pour_milk.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/pour_milk.jpg" alt="pouring milk into latte" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/shots.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/shots.jpg" alt="pulling shots of espresso from espresso machine" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/store_2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/store_2.jpg" alt="inside view of coffee shop" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/pour_shots_2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/pour_shots_2.jpg" alt="pouring shots into cup" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2024 Brioux Falls, LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
