import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Directions = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/barista.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Find Us
          </h1>
        </div>
      </section>
      {/* Section Directions Info */}
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
            <p>
              Skywalk access is located on Level 2 of the parking ramp. Use the Skywalk access to enter
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
              to the parking garage. Take stairs or elevator to 2nd floor of parking garage.
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
    </Layouts>
  );
};
export default Directions;
