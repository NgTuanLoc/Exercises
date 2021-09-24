const Cart = ({ items, showCartItems }) => {
  return (
    <div
      className={`header__cart-item-container ${
        showCartItems ? "header__cart-item-container--active" : null
      }`}
    >
      {items.map((item, id) => {
        return (
          <div className="cart-item" key={id}>
            <div className="fas fa_times cart-item__icon">
              <i className="fas fa-times"></i>
            </div>
            <img src={item.img} alt={item.name} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
          </div>
        );
      })}
      <div>
        <a href="#home" className="btn" id="btn__checkout">
          checkout now
        </a>
      </div>
    </div>
  );
};

export default Cart;
