import { customers } from "../data/data";
import quote from "../images/quote-img.png";
import Rating from "../components/Rating";

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        Our Customer's <span>Reviews</span>
      </h1>
      <div className="reviews__container">
        {customers.map((customer, id) => {
          return (
            <div className="reviews__item" key={id}>
              <img src={quote} alt="quote" className="reviews__quote" />
              <p>{customer.review}</p>
              <img
                src={customer.img}
                alt={customer.name}
                className="reviews__user"
              />
              <h3>{customer.name}</h3>
              <Rating rating={customer.rating} className="product__rating" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
