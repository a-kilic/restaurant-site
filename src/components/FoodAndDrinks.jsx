import Coffee from "../assets/coffee-square.webp";
import Pasta from "../assets/pasta-square.webp";
import Steak from "../assets/steak-square.webp";

const FoodAndDrinks = () => {
  return (
    <section id="food-and-drinks">
      <main className="flex flex-col md:flex-row">
        {/* Breakfast Section */}
        <div className="relative w-full">
          <img src={Coffee} alt="Coffee" className="w-full h-auto" />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-50">
            BREAKFAST
          </p>
        </div>
        {/* Lunch Section */}
        <div className="relative w-full">
          <img src={Pasta} alt="Pasta" className="w-full h-auto" />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-50">
            LUNCH
          </p>
        </div>
        {/* Dine Section */}
        <div className="relative w-full">
          <img src={Steak} alt="Steak" className="w-full h-auto" />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white bg-black bg-opacity-50">
            DINE
          </p>
        </div>
      </main>
    </section>
  );
};

export default FoodAndDrinks;
