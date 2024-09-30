import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FoodAndDrinks from "./components/FoodAndDrinks";
import Menu from "./components/Menu";
import Socials from "./components/Socials";
import Locations from "./components/Locations";
import Anfahrt from "./components/Anfahrt";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FoodAndDrinks />
      <Menu />
      <Socials />
      <Locations />
      <Anfahrt />
      <Contact />
      <Services />
      <Footer />
    </>
  );
};
export default App;
