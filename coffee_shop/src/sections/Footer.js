/* eslint-disable jsx-a11y/anchor-has-content */
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__social">
        <a href="#Home" className="fab fa-facebook-f footer__social--fb" />
        <a href="#Home" className="fab fa-twitter footer__social--tw" />
        <a href="#Home" className="fab fa-instagram footer__social--in" />
        <a href="#Home" className="fab fa-linkedin footer__social--li" />
        <a href="#Home" className="fab fa-pinterest footer__social--pi" />
      </div>
      <div className="footer__links">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </div>
      <div className="heading" style={{fontSize: "2rem"}}>
        created by <span>NgTuanLoc</span> | all rights reserved &copy;
      </div>
    </section>
  );
};

export default Footer;
