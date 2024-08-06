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

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> Mon - Fri | 07:00 am - 02:00 pm
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
                  <a href="https://brioux-falls.square.site/" target="_blank">Order Now</a>
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
              <a href="https://brioux-falls.square.site/" target="_blank">Order Now</a>
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
                <i className="far fa-clock" /> <em>opening hours :</em> Mon - Fri | 07:00 am - 02:00 pm
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
