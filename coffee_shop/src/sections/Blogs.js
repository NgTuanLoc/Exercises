import { blog } from "../data/data";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Our <span>Blogs</span>
      </h1>
      <div className="blogs__container">
        {blog.map((item, id) => {
          return (
            <div className="blogs__item" key={id}>
              <div className="blogs__img">
                <img src={item.img} alt={item.author} />
              </div>
              <div className="blogs__content">
                <a href="#home" className="blogs__title">
                  {item.title}
                </a>
                <span>
                  by {item.author}/ {item.date}
                </span>
                <p>{item.desc}</p>
                <a href="#home" className="btn btn__large">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
