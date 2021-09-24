import { productItem } from "../data/data";
import Rating from "../components/Rating";

const Products = () => {
  return (
    <section className="product" id="products">
      <h1 className="heading">
        Our <span>Products</span>
      </h1>
      <div className="product__container">
        {productItem.map((item, id) => {
          return (
            <div className="product__item" key={id}>
              <div className="product__icons">
                <i href="#home" className="fas fa-shopping-cart"></i>
                <i href="#home" className="fas fa-heart"></i>
                <i href="#home" className="fas fa-eye"></i>
              </div>
              <div className="product__image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="product__content">
                <h3>{item.name}</h3>
                <Rating rating={item.rating} className="product__rating" />
                <div className="price-item">
                  ${item.finalPrice} <span>${item.beforePrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
