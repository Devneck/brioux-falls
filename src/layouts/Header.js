import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const normalizeDate = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const hours = {
    Sunday: { startTime: new Date('1970-01-01T08:00:00'), endTime: new Date('1970-01-01T13:00:00') },
    Monday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
    Tuesday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
    Wednesday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
    Thursday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
    Friday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
    Saturday: { startTime: new Date('1970-01-01T07:00:00'), endTime: new Date('1970-01-01T14:00:00') },
  };
  
  const extraClosedDates = [
    // Month is 0 indexed
    new Date(2024, 11, 25), // Christmas 2024
    new Date(2025, 10, 27), // Thanksgiving 2025
    new Date(2025, 11, 25), // Christmas 2025
  ];
  
  const specialHours = [
    { date: new Date(2025, 0, 1), startTime: new Date('1970-01-01T09:00:00'), endTime: new Date('1970-01-01T13:00:00') }, // New Year's Day 2025
    // Add more special hours as needed
  ];

  const isExtraClosedDate = (date) => {
    const normalizedDate = normalizeDate(date);
    console.log('test date', normalizedDate);
    return extraClosedDates.some(closedDate => {
      console.log('closed date', closedDate);
      return normalizedDate.getTime() === normalizeDate(closedDate).getTime()
    });
  };
  
  const getSpecialHours = (date) => {
    const normalizedDate = normalizeDate(date);
    return specialHours.find(specialHour => 
      normalizedDate.getTime() === normalizeDate(specialHour.date).getTime()
    );
  };

  const getTodayHours = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const todayDay = today.getDay();

    if (isExtraClosedDate(today)) {
      return <em>* Closed For Holiday *</em>;
    }

    const specialHour = getSpecialHours(today);
    if (specialHour) {
      const { startTime, endTime } = specialHour;
      const start = new Date(today.toDateString() + ' ' + startTime.toTimeString().split(' ')[0]);
      const end = new Date(today.toDateString() + ' ' + endTime.toTimeString().split(' ')[0]);

      if (today >= start && today <= end) {
        return `${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      } else {
        return (
          <>
            {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} <em>* Closed *</em>
          </>
        );
      }
    }

    const todayHours = hours[daysOfWeek[todayDay]];
    const { startTime, endTime } = todayHours;
    const start = new Date(today.toDateString() + ' ' + startTime.toTimeString().split(' ')[0]);
    const end = new Date(today.toDateString() + ' ' + endTime.toTimeString().split(' ')[0]);

    if (today >= start && today <= end) {
      return `${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return (
        <>
          {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} <em>* Closed *</em>
        </>
      );
    }
  };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>today's hours :</em> {getTodayHours()}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="kf-h-social">
              <a href="https://www.facebook.com/profile.php?id=100094740846025" target="blank">
                <i className="fab fa-facebook-f" />
              </a>
              {/* <a href="https://twitter.com/BriouxFallsSf" target="blank">
                <i className="fab fa-twitter" />
              </a> */}
              <a href="https://www.instagram.com/briouxfalls/" target="blank">
                <i className="fab fa-instagram" />
              </a>
              {/* <a href="youtube.com" target="blank">
                <i className="fab fa-tiktok" />
              </a> */}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> 150 E. 4th Place, Suite 202 | sioux falls, sd
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link href="/">
                <img src="images/bf-logo-white.svg" alt="Brioux Falls logo in white" style={{ maxHeight: 'fit-content', maxWidth: '3.5rem' }} />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="menu-coffee">Menu</Link>
                </li>
                <li>
                  <a href="https://order.dripos.com/Brioux-Falls" target="_blank">Order Now</a>
                </li>
                <li>
                  <Link href="contacts">Contact</Link>
                </li>
                <li>
                  <Link href="directions">Find Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="menu-coffee">Menu</Link>
            </li>
            <li>
              <a href="https://order.dripos.com/Brioux-Falls" target="_blank">Order Now</a>
            </li>
            <li>
              <Link href="contacts">Contact</Link>
            </li>
            <li>
              <Link href="directions">Find Us</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="https://www.facebook.com/profile.php?id=100094740846025" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                {/* <a href="https://twitter.com/BriouxFallsSf" target="blank">
                  <i className="fab fa-twitter" />
                </a> */}
                <a href="https://www.instagram.com/briouxfalls/" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                {/* <a href="youtube.com" target="blank">
                  <i className="fab fa-tiktok" />
                </a> */}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>today's hours :</em> {getTodayHours()}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 150 E. 4th Place, Suite 202 | sioux falls, sd
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
