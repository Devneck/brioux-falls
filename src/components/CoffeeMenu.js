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
            onClick={handleFilterKeyChange("iced")}
            data-href="iced"
          >
            Iced Drinks
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
            onClick={handleFilterKeyChange("cozy")}
            data-href="cozy"
          >
            Cozy Drinks
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Americano */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/americano.jpg" className="has-popup-image">
                    <img src="images/drinks/americano.jpg" alt="americano" />
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced tea drink"> {/* Matcha Latte */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Latte */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/latte.jpg" className="has-popup-image">
                    <img src="images/drinks/latte.jpg" alt="latte" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Latte</h5>
                  <div className="subname">
                    Espresso blended with steamed milk, offering a delightful twist with your choice of flavor infusion
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Mocha */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot coffee drink"> {/* Flat White */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/flat_white.jpg" className="has-popup-image">
                    <img src="images/drinks/flat_white.jpg" alt="flat white" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Flat White</h5>
                  <div className="subname">
                    Experience the perfect balance of bold espresso and silky smooth steamed milk in our flat white. With a rich, velvety microfoam and a stronger coffee flavor than a latte, this classic drink is a smooth and satisfying way to enjoy your espresso.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced coffee drink"> {/* Iced Brown Sugar Shaken Espresso */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/iced_brown_sugar_shaken.jpg" className="has-popup-image">
                    <img src="images/drinks/iced_brown_sugar_shaken.jpg" alt="iced brown sugar shaken espresso" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced Brown Sugar Shaken Espresso</h5>
                  <div className="subname">
                    Elevate your espresso experience with our Iced Brown Sugar Shaken Espresso. Rich espresso is hand-shaken with sweet brown sugar syrup and ice, creating a perfectly chilled and frothy blend. Topped off with a splash of creamy milk, this drink offers a smooth, caramel-like sweetness with every sip, making it a refreshing yet indulgent treat for any time of day.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced tea drink"> {/* Chai Tea Latte */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced tea drink"> {/* London Fog */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/iced_london_fog.jpg" className="has-popup-image">
                    <img src="images/drinks/iced_london_fog.jpg" alt="iced london fog" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Iced London Fog</h5>
                  <div className="subname">
                    Enjoy the classic elegance of Earl Grey tea blended with creamy milk for a smooth and comforting tea latte. With delicate notes of bergamot, this drink is available hot or iced, perfect for any weather or mood.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Caramel Macchiato */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot coffee drink"> {/* Café Au Lait */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/cafe_au_lait.jpg" className="has-popup-image">
                    <img src="images/drinks/cafe_au_lait.jpg" alt="Café Au Lait" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Café Au Lait</h5>
                  <div className="subname">
                    Enjoy the perfect harmony of rich, freshly brewed coffee and steamed milk. With its smooth and creamy texture, this comforting drink is an ideal choice for those who enjoy a lighter, balanced coffee experience.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Café Miel */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/cafe_miel.jpg" className="has-popup-image">
                    <img src="images/drinks/cafe_miel.jpg" alt="Café Miel" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Café Miel</h5>
                  <div className="subname">
                    A perfect blend of rich espresso, creamy milk, and the natural sweetness of honey, all enhanced with a hint of cinnamon.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced coffee drink"> {/* Cold Brioux */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/cold_brioux.jpg" className="has-popup-image">
                    <img src="images/drinks/cold_brioux.jpg" alt="cold brioux" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cold Brioux</h5>
                  <div className="subname">
                    Enjoy the smooth, rich flavor of our Cold Brioux, crafted with coarsely ground coffee steeped in cold water for hours to extract a bold and deliciously refreshing taste. Served chilled and ready to invigorate, it’s the perfect way to kickstart your day or cool down any time!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot coffee drink"> {/* Brioux'd */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/briouxd_coffee.jpg" className="has-popup-image">
                    <img src="images/drinks/briouxd_coffee.jpg" alt="brioux'd coffee" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Brioux'd Coffee</h5>
                  <div className="subname">
                    Smooth, rich, and perfectly brewed, our signature drip coffee is the ideal companion for any moment. Simple yet satisfying, it’s crafted to highlight the bold flavors of our carefully selected beans.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Breve */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/breve.jpg" className="has-popup-image">
                    <img src="images/drinks/breve.jpg" alt="breve" />
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot iced coffee drink"> {/* Blueberry Pancake Latte */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/blueberry_pancake_latte.jpg" className="has-popup-image">
                    <img src="images/drinks/blueberry_pancake_latte.jpg" alt="blueberry pancake latte" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Blueberry Pancake Latte</h5>
                  <div className="subname">
                    Elevate your coffee experience with our Blueberry Pancake Latte—a delectable fusion of breakfast comfort and rich espresso. We blend velvety steamed milk with the sweet essence of blueberries, a hint of maple syrup, and a touch of creamy vanilla. The result is a latte that captures the indulgent flavors of fluffy pancakes and fresh blueberries with a smooth, vanilla-infused finish. Perfect for a morning treat or an afternoon escape, our Blueberry Pancake Latte offers a cozy, satisfying taste of breakfast bliss in every cup.
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
                  <a href="images/drinks/cappuccino.jpg" className="has-popup-image">
                    <img src="images/drinks/cappuccino.jpg" alt="cappuccino" />
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cozy drink"> {/* Hot Chocolate */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cozy drink"> {/* Chocolate Milk */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/chocolate_milk.jpg" className="has-popup-image">
                    <img src="images/drinks/chocolate_milk.jpg" alt="chocolate milk" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Chocolate Milk</h5>
                  <div className="subname">
                    Creamy, rich, and irresistibly chocolaty, our classic chocolate milk is a sweet and satisfying treat, perfect for any time of day. Enjoy it as a nostalgic favorite or a delightful indulgence!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cozy drink"> {/* Spiced Apple Cider */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/apple_cider.jpg" className="has-popup-image">
                    <img src="images/drinks/apple_cider.jpg" alt="spiced apple cider" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Spiced Apple Cider</h5>
                  <div className="subname">
                    Cozy up with the comforting taste of our Spiced Apple Cider, a warm blend of spiced apple flavors that brings the essence of the season in every sip. Perfectly balanced and served hot to warm you from the inside out.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cozy drink"> {/* Caramel Apple Cider */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/apple_cider.jpg" className="has-popup-image">
                    <img src="images/drinks/apple_cider.jpg" alt="caramel apple cider" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Caramel Apple Cider</h5>
                  <div className="subname">
                    The Caramel Apple Cider is a warm and comforting blend of crisp apple cider and rich caramel syrup, perfectly balanced with hot water to create a soothing fall beverage. Available only hot, this drink wraps you in the cozy flavors of autumn, making it an ideal choice for a chilly day.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot cozy drink"> {/* Cranberry Apple Cider */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/apple_cider.jpg" className="has-popup-image">
                    <img src="images/drinks/apple_cider.jpg" alt="cranberry apple cider" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cranberry Apple Cider</h5>
                  <div className="subname">
                    Embrace the holiday season with our warm Cranberry Apple Cider. Made with spiced apple cider, a touch of cranberry syrup, and sweetened with brown sugar, it’s a cozy treat perfect for chilly days. Available hot, only during the holiday season.
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
                  <a href="images/drinks/hot_tea.jpg" className="has-popup-image">
                    <img src="images/drinks/hot_tea.jpg" alt="black tea bag" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Hot Tea</h5>
                  <div className="subname">
                  Enjoy a soothing cup of tea with your choice of Black, Green, or Earl Grey. Each sachet is steeped to perfection for a warm and comforting experience.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all blended coffee drink"> {/* Blended Frappe */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/frappe.jpg" className="has-popup-image">
                    <img src="images/drinks/frappe.jpg" alt="blended mocha frappe" />
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all blended drink"> {/* Fruit Smoothie */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/fruit_smoothie.jpg" className="has-popup-image">
                    <img src="images/drinks/fruit_smoothie.jpg" alt="fruit smoothie" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Fruit Smoothie</h5>
                  <div className="subname">
                    Cool down with our refreshing, fruity smoothies made to order with real fruit flavors. Each sip is a burst of vibrant, juicy goodness that’s both energizing and delicious. Perfect for a quick treat or a healthy pick-me-up, our smoothies are blended to perfection for the ultimate thirst-quenching experience!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all blended drink"> {/* Protein Shake */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/protein_shake.jpg" className="has-popup-image">
                    <img src="images/drinks/protein_shake.jpg" alt="Protein Shake" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Protein Shake</h5>
                  <div className="subname">
                    Power your day with our creamy, protein-packed shakes! Choose from four delicious flavors: Chocolate Covered Strawberry, Vanilla Peanut Butter Banana, Mocha Espresso, or Vanilla Espresso. Each shake delivers 30g of protein blended with premium ingredients for a flavorful and satisfying boost. Perfect for fueling your active lifestyle or as a tasty pick-me-up!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced energy drink"> {/* Guava Lamp Lotus */}
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced energy drink"> {/* Orange Creamsicle Lotus */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/orange_creamsicle_lotus.jpg" className="has-popup-image">
                    <img src="images/drinks/orange_creamsicle_lotus.jpg" alt="orange creamsicle lotus" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Orange Creamsicle Lotus</h5>
                  <div className="subname">
                    Experience a nostalgic treat with a twist! Our Orange Creamsicle Lotus is a refreshing iced drink that combines the vibrant flavors of Pink and Cream Lotus with a sweet blend of orange and vanilla syrups. A splash of orange juice adds a citrusy kick, all topped off with a fizzy club soda finish. It's like sipping on a creamsicle, perfect for those warm days when you need a delicious pick-me-up.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced energy drink"> {/* The Berry Pink */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/berry_pink_lotus.jpg" className="has-popup-image">
                    <img src="images/drinks/berry_pink_lotus.jpg" alt="the berry pink lotus" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">The Berry Pink</h5>
                  <div className="subname">
                    Bursting with bright berry flavors, The Berry Pink blends Lotus Pink Energy with sweet strawberry and tart raspberry syrups. Topped with refreshing club soda over ice, this drink is a fizzy, fruity pick-me-up that’s as bold in flavor as it is in color!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all iced energy drink"> {/* Lotus Libre */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/drinks/lotus_libre.jpg" className="has-popup-image">
                    <img src="images/drinks/lotus_libre.jpg" alt="lotus libre" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Lotus Libre: Unleash Your Energy</h5>
                  <div className="subname">
                    Elevate your energy with our Lotus Energy Drink Collection. Craft your own blend with our 'Lotus Libre' base and choose from an array of Lotus options and flavorful syrup combinations. Unleash the power of personalization at your fingertips!
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
                  <a href="images/food/bagels.jpg" className="has-popup-image">
                    <img src="images/food/bagels.jpg" alt="assorted bagels" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Bagels</h5>
                  <div className="subname">
                    Freshly toasted and available in Plain, Everything, or Blueberry. Customize your bagel with a creamy spread—choose from Plain Cream Cheese or Garden Veggie for an extra burst of flavor. Perfectly simple, yet totally satisfying!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* Breakfast Burrito */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/breakfast_burrito.jpg" className="has-popup-image">
                    <img src="images/food/breakfast_burrito.jpg" alt="breakfast burrito" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Breakfast Burrito</h5>
                  <div className="subname">
                    Start your day right with our hearty breakfast burritos, available in Pork Sausage, Bacon, or Veggie. Each burrito is packed with savory fillings and cooked to order for a perfectly warm and satisfying breakfast. Ready when you are!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all breakfast food"> {/* Breakfast Sandwich */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/bagel_bacon_breakfast.jpg" className="has-popup-image">
                    <img src="images/food/bagel_bacon_breakfast.jpg" alt="breakfast sandwich" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Breakfast Sandwich</h5>
                  <div className="subname">
                    Build your perfect breakfast with your choice of Bagel, Biscuit, Maple Waffle, or 12-Grain Bread. Layer it with Bacon, a Sausage Patty, or Egg Only, all topped with a fluffy egg and melted cheddar cheese. A delicious and customizable way to kick-start your morning!
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
                  <a href="images/food/biscuits_and_gravy.jpg" className="has-popup-image">
                    <img src="images/food/biscuits_and_gravy.jpg" alt="biscuits and sausage gravy" />
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
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch food"> {/* Soup of week */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/bread_bowl.jpg" className="has-popup-image">
                    <img src="images/food/bread_bowl.jpg" alt="soup" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Wednesday Soup Special</h5>
                  <div className="subname">
                    Warm up with our delicious soup of the day! Choose a cup, pair it as a combo with any sandwich, or enjoy it served in a hearty bread bowl. Currently featuring our fan-favorite Ultimate Baked Potato Soup, loaded with comfort and flavor.
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch food"> {/* BLT */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/bf-logo-white.svg" className="has-popup-image">
                    <img src="images/bf-logo-white.svg" alt="b.l.t." />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">BLT</h5>
                  <div className="subname">
                    A classic combination of crispy bacon, fresh lettuce, and ripe tomatoes, served on toasted ciabatta bread. Paired with crunchy kettle chips for a perfect bite every time. On Wednesdays, enjoy this delicious sandwich as part of our Soup and Sandwich Combo!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch food"> {/* Turkey Melt */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/food/turkey_melt.jpg" className="has-popup-image">
                    <img src="images/food/turkey_melt.jpg" alt="turkey melt" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Turkey Melt</h5>
                  <div className="subname">
                    Sliced turkey, crispy bacon, melted cheddar cheese, creamy mayo, fresh lettuce, and juicy tomato, all stacked on toasted ciabatta bread for a savory, satisfying melt. Served with crunchy kettle chips for the perfect pairing. On Wednesdays, enjoy this delicious sandwich as part of our Soup and Sandwich Combo!
                  </div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all lunch food"> {/* Cold Turkey Sandwich */}
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/bf-logo-white.svg" className="has-popup-image">
                    <img src="images/bf-logo-white.svg" alt="cold turkey sandwich" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Cold Turkey Sandwich</h5>
                  <div className="subname">
                    Sliced turkey, cheddar cheese, crisp lettuce, juicy tomato, and creamy mayo, all nestled between two slices of hearty 12-grain bread. Served with crunchy kettle chips for the perfect pairing. Enjoy it as a combo with your choice of soup on Wednesdays!
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
