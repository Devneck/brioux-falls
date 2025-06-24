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
            Directions
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
              How to get to Brioux Falls
            </div>
            <p>
              Brioux Falls is located at 150 E 4th Place, Suite 202 in the Steel District Office Tower 
              in downtown Sioux Falls. We are located on the second floor of the office tower immediately
              next to the skywalk entrance from the Steel District Parking Ramp. Parking at nights and on
              weekends is always free and open to the public. During the week between 6am and 6pm,
              parking is free for the first 15 minutes and then $1.50 per hour which is the same rate as
              public street parking in the downtown area. 
            </p>
            <p>
              When you arrive at the Steel District, you will be able to see our sign in the 2nd floor window. 
              We are located directly behind that sign. There are several options for reaching Brioux Falls.
            </p>
            <img src="images/steel-district-map.png" alt="map of the steel district" style={{ width: '100%', margin: '2rem 0' }}/>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Steel District Parking Ramp Directions
            </h3>
            <p>
              Enter The Steel District Parking ramp from N Metli Pl between E 6th Street and E 4th Place.
              Stay to the right while in the parking ramp and proceed to the 2nd level of the garage. There
              are Guest Parking stalls available on the 2nd level of the garage immediately near the skywalk
              entrance to the Office Tower. If you are unable to find a Guest Parking stall, you may park in 
              any open spaces in the garage. Parking in the garage is free for the first 15 minutes. Always
              free on evenings and weekends.
            </p>
            <p>
              Skywalk access is located on Level 2 of the parking ramp. Use the Skywalk access to enter
              the Office tower to find Brioux Falls.
            </p>
            <hr />
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Walking Directions
            </h3>
            <h5>
              Office Tower Entrance (Preferred)
            </h5>
            <p>
              Walk East on E 4th Place under the skywalk towards the giant yellow keyhole sculpture
              and the Big Sioux River. Enter the Office Tower (labeled on the map) to the North (on
              your left) through the revolving door. Take stairs or elevator to 2nd floor. Take a
              left and follow the hall all the way to the end on the North end of the building. Take
              another left to find Brioux Falls.
            </p>
            <h5>
              Garage Entrance
            </h5>
            <p>
              Walk East on E 4th Place towards the skywalk, giant yellow keyhole sculpture and the
              Big Sioux River. On the south side of the street, just before crossing under the
              skywalk, you will see a door to the South (on your right) to enter the parking garage.
              Enter the door and follow the hallway to the stairs or elevator. Take the elevator
              or stairs to the 2nd floor and exit into the garage. Use the Skywalk access to enter
              the Office tower to Brioux Falls.
            </p>
            <h5>
              Canopy Hotel Entrance
            </h5>
            <p>
              You may also reach Brioux Falls using the Canopy Hotel entrance. Enter the hotel lobby
              through their main entrance and use the stairs or elevator to reach the 2nd floor. From 
              the 2nd floor there is a 2nd skywalk that connects to the Office Tower. After using this
              skywalk, we are at the end of the hall near the skywalk to the parking garage. Please note
              that we are not part of the Canopy Hotel or it's parent company. 
            </p>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Directions;
