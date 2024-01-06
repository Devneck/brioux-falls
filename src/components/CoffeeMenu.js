import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Choose Best of
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Brioux Falls Menu
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("drink")}
            data-href="drink"
          >
            Drinks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("food")}
            data-href="food"
          >
            Food
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot")}
            data-href="hot"
          >
            Hot Drinks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("cold")}
            data-href="cold"
          >
            Cold Drinks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("blended")}
            data-href="blended"
          >
            Blended Drinks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("coffee")}
            data-href="coffee"
          >
            Coffee
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("tea")}
            data-href="tea"
          >
            Tea
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("energy")}
            data-href="energy"
          >
            Lotus
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("dessert")}
            data-href="dessert"
          >
            Dessert
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("breakfast")}
            data-href="breakfast"
          >
            Breakfast
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("snack")}
            data-href="snack"
          >
            Snacks
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("lunch")}
            data-href="lunch"
          >
            Lunch
          </a>
        </div>
        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Americano */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Long Black */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold tea drink"> {/* Matcha Latte */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Unflavored Latte */}
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
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Flavored Latte */}
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
                  <h5 className="name">Flavored Latte</h5>
                  <div className="subname">
                    Espresso blended with steamed milk, offering a delightful twist with your choice of flavor infusion
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Mocha */}
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
                  <h5 className="name">Mocha</h5>
                  <div className="subname">
                    Decadent blend of espresso, rich chocolate, and velvety steamed milk for an indulgent, irresistible delight
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee tea drink"> {/* Chai Tea Latte */}
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
                  <h5 className="name">Chai Tea Latte</h5>
                  <div className="subname">
                    A warming embrace of spcold black tea and steamed milk, crafting a cozy and flavorful indulgence
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Caramel Macchiato */}
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
                  <h5 className="name">Caramel Macchiato</h5>
                  <div className="subname">
                    Luscious caramel drizzle over espresso and steamed milk for a sweet, layered coffee experience
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold coffee drink"> {/* Breve */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot coffee drink"> {/* Cappuccino */}
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
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot dessert drink"> {/* Hot Chocolate */}
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
                  <h5 className="name">Hot Chocolate</h5>
                  <div className="subname">
                    A comforting blend of rich cocoa and steamed milk, creating a warm, indulgent treat for any occasion
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cold tea drink"> {/* Matcha Tea */}
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
                  <h5 className="name">Matcha Tea</h5>
                  <div className="subname">
                    Pure and vibrant green tea powder, brewed for an authentic and invigorating flavor experience
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot tea drink"> {/* Hot Tea (sachets) */}
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
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all blended coffee dessert drink"> {/* Blended Frappe */}
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
                  <h5 className="name">Blended Frappe</h5>
                  <div className="subname">
                    Indulge in a frosty fusion of rich coffee, ice, and cream, creating a deliciously refreshing treat
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all blended dessert drink"> {/* Jet Tea Smoothie */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold energy drink"> {/* Shark Bait */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold energy drink"> {/* The Berry Pink */}
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
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold energy drink"> {/* Green Apple Jolly Rancher */}
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
                  <h5 className="name">Green Apple Jolly Rancher</h5>
                  <div className="subname">
                    Lotus White Energy, sweet & sour mix, green apple, lime syrups over ice
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold energy drink"> {/* The Patriot */}
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
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold energy drink"> {/* LotusLibre */}
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
                  <h5 className="name">LotusLibre: Unleash Your Energy</h5>
                  <div className="subname">
                    Elevate your energy with our Lotus Energy Drink Collection. Craft your own blend with our 'LotusLibre' base and choose from an array of Lotus options and flavorful syrup combinations. Unleash the power of personalization at your fingertips!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold drink"> {/* Poppi Soda */}
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
                  <h5 className="name">Poppi Soda</h5>
                  <div className="subname">
                    A fizzy and flavorful beverage that not only refreshes but also supports your gut health with prebiotics
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* Muffins */}
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
                  <h5 className="name">Muffins</h5>
                  <div className="subname">
                    Indulge in a variety of muffins, including tempting gluten-free options for a delightful treat suitable for everyone's taste
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* Bagels */}
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
                  <h5 className="name">Bagels</h5>
                  <div className="subname">
                    Enjoy a variety of bagels, including gluten-free options, for a convenient and satisfying choice
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch snack food"> {/* Snack Tray */}
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
                  <h5 className="name">Snack Tray Delight</h5>
                  <div className="subname">
                    A perfect blend of savory and sweet featuring sausage, cheese, crackers, assorted nuts, craisins, and apricots. Ideal for a quick snack or a light lunch
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast snack food"> {/* Scones */}
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
                  <h5 className="name">Scones</h5>
                  <div className="subname">
                    Elevate your tea time with our freshly baked scones—delicate, flaky, and bursting with flavor
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch food"> {/* Soups */}
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
                  <h5 className="name">Soups</h5>
                  <div className="subname">
                    Savor the convenience of our daily soup, featuring a rotating selection of flavorful options
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast snack food"> {/* Yogurt Bowl */}
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
                  <h5 className="name">Yogurt Bowl</h5>
                  <div className="subname">
                    A delightful blend of creamy yogurt, fresh fruit, and crunchy granola in a convenient cup – a wholesome and tasty treat on the go
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all snack food"> {/* Hummus & Pita */}
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
                  <h5 className="name">Hummus & Pita</h5>
                  <div className="subname">
                    Dive into a Mediterranean delight with our creamy hummus paired perfectly with soft and warm pita bread
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* Oatmeal Cups */}
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
                  <h5 className="name">Oatmeal Cups</h5>
                  <div className="subname">
                    Enjoy the goodness of hearty oats in a convenient cup—nutritious, gluten-free, and ready for a quick, wholesome breakfast
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* B&G */}
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
                  <h5 className="name">Biscuits & Gravy</h5>
                  <div className="subname">
                    Savor the classic comfort of warm biscuits smothered in rich, savory gravy for a hearty and satisfying breakfast indulgence
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all snack food"> {/* Snacks */}
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
                  <h5 className="name">Snacks</h5>
                  <div className="subname">
                    Explore our diverse range of treats, from candy bars and kettle chips to gourmet selections and granola bars – a snack lover's paradise!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeeMenu;
