import Restaurant from "../assets/restaurant.jpg";

const Angebot = () => {
  return (
    <section className="bg-gray-950">
      <main>
        <img
          src={Restaurant}
          alt="Table with blue chairs"
          className="object-cover w-full h-[300px]"
        />
        <div className="pt-4 pb-4 w-[95%]">
          <p className="mt-4 mb-2 text-2xl text-center text-white md:text-3xl">
            A LOVESTORY NOW
          </p>
          <p className="mb-2 text-center text-white md:text-xl">
            Unser Angebot umfasst Frühstück, Business Lunch oder abendliches
            Dinner - die perfekte Mahlzeit zu jeder Tageszeit.
          </p>
          <p className="mb-4 font-bold text-center text-white md:text-xl">
            #urbanfood
          </p>
        </div>
      </main>
    </section>
  );
};

export default Angebot;
