import HeroBanner from "../assets/flower-desk-banner.webp";
import LogoBig from "../assets/logo-big.webp";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <img
        src={HeroBanner}
        alt="Hero Banner Nova a Lovestory Now"
        className="object-cover w-full h-[500px] md:h-[800px]"
      />
      <div className="absolute flex flex-col items-center w-[90%] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <img src={LogoBig} alt="Hero Banner" className="w-[700px]" />
        <a href="https://nova.reservision.online/" target="_blank">
          <button className="p-3 text-white transition border-2 border-white rounded mt-7 bg-black/70 md:text-3xl hover:-translate-y-1">
            JETZT RESERVIEREN
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
