import HeroBanner from "../assets/flower-desk-banner.webp";
import LogoBig from "../assets/logo-big.webp";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={HeroBanner}
        alt="Hero Banner Nova a Lovestory Now"
        className="object-cover w-full h-[400px] md:h-[800px]"
      />
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <img src={LogoBig} alt="Hero Banner" className="w-[400px]" />
        <button className="p-3 mt-4 text-white bg-black/70">
          JETZT RESERVIEREN
        </button>
      </div>
    </section>
  );
};

export default Hero;
