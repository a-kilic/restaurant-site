import LogoSmall from "../assets/logo-small.webp";
import { NavbarData } from "./Data";

const Navbar = () => {
  return (
    <section className="bg-gray-950">
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-2 mx-auto max-w-[110rem]">
        {/* Logo and Navbar Links Wrapper */}
        <div className="flex items-center min-w-0 space-x-8">
          {/* Logo */}
          <img
            src={LogoSmall}
            alt="Nova Logo Navbar"
            className="w-[80px] md:w-[100px]"
          />
          {/* Navbar Links for Desktop View */}
          <ul className="hidden space-x-6 lg:flex">
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="text-white hover:text-gray-400">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Opening Hours Information (visible only on larger screens) */}
        <div className="hidden text-right text-white lg:block">
          <div className="text-left">
            <p>MO Ruhetag</p>
            <p>DI-FR ab 9:00 Uhr</p>
            <p>SA-SO ab 10:00 Uhr</p>
          </div>
          <div className="space-x-4 text-2xl text-center">
            <a
              href="https://www.instagram.com/nova.alovestorynow/"
              target="_blank"
            >
              <i className="text-white fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.google.com/maps/place/Hauptstra%C3%9Fe+34,+63303+Dreieich/@50.017035,8.6950816,17z/data=!3m1!4b1!4m6!3m5!1s0x47bd72d69b31c51d:0x152f58604497d93a!8m2!3d50.017035!4d8.6950816!16s%2Fg%2F11c243jbht?shorturl=1"
              target="_blank"
            >
              <i className="text-white fa-solid fa-location-dot"></i>
            </a>
            <a href="mailto:hallo@nova-dreieich.de">
              <i className="text-white fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Mobile View: Hamburger Menu (visible on small screens) */}
        <button className="lg:hidden w-[50px]">
          <i className="text-4xl text-white fa-solid fa-bars"></i>
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
