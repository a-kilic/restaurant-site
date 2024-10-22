const Footer = () => {
  return (
    <footer className="py-6 border-t bg-gray-950">
      <div className="flex flex-col items-center w-[90%] md:w-[600px] mx-auto text-center text-white">
        <h2 className="mb-4 text-2xl md:text-3xl">Bleib verbunden</h2>
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com/nova.alovestorynow/"
                className="hover:text-blue-500"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/novarestaurantdreieich/"
                className="hover:text-blue-500"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@nova.alovestorynow"
                className="hover:text-blue-500"
                target="_blank"
              >
                TikTok
              </a>
            </li>
          </ul>
        </nav>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} NOVA - A LOVESTORY NOW. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
