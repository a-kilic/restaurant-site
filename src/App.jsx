import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Angebot from "./components/Angebot";
import FoodAndDrinks from "./components/FoodAndDrinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Angebot />
      <FoodAndDrinks />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
