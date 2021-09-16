import Header from "./sections/Header";
import logo from "./images/about-img.jpeg";

const App = () => {
  return (
    <div>
      <Header />
      <img src={logo} alt="logo" />
    </div>
  );
};

export default App;
