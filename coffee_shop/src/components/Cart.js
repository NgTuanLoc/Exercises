const Cart = ({ items }) => {
  return (
    <div className="header__cart-item-container">
      {items.map((item, id) => {
        return (
          <div className="cart-item" key={id}>
            <span className="fas fa_times"></span>
            <img src={item.img} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
          </div>
        );
      })}
      <a href="#home" className="btn">
        checkout now
      </a>
    </div>
  );
};

export default Cart;
