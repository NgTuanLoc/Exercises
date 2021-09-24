import aboutImage from "../images/about-img.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> Us
      </h1>
      <div className="about__row">
        <div className="about__image">
          <img src={aboutImage} alt="about-img" />
        </div>
        <div className="about__content">
          <h3>What Makes Our Coffee Special ?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
            temporibus deserunt!{" "}
          </p>
          <p>
            Accusantium cumque sint fugit, repellendus, ducimus corporis quos
            deserunt, sequi aliquam temporibus provident. Pariatur fuga totam
            quisquam nisi non.
          </p>
          <a href="#home" className="btn btn__large">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
