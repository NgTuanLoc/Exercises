import { menuItems } from "../data/data";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        <span>Our</span> Menu
      </h1>
      <div className="menu__container">
        {menuItems.map((item, id) => {
          return (
            <div className="menu__item" key={id}>
              <img src={item.img} alt="menu-item" />
              <h3>{item.name}</h3>
              <div className="price">
                ${item.finalPrice} <span>${item.beforePrice}</span>
              </div>
              <a href="#home" className="btn">
                add to cart
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
