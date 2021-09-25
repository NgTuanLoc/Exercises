/* eslint-disable jsx-a11y/iframe-has-title */
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>
      <div className="contact__container">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1CNsWaVrw0bh05sXinzv-kU-Hen0"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />

        <form action="POST" className="contact__form">
          <h3>Get In Touch With Us</h3>
          <div className="contact__input">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="Your Name " />
          </div>
          <div className="contact__input">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="Your Email " />
          </div>
          <div className="contact__input">
            <span className="fas fa-phone"></span>
            <input type="text" placeholder="Phone " />
          </div>
          <input type="submit" value="contact now" className="btn btn__large" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
