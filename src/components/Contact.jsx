const Contact = () => {
  return (
    <section className="py-10 bg-gray-950" id="kontakt">
      <div className="flex flex-col justify-center items-center w-[90%] md:w-[600px] mx-auto">
        <h2 className="mb-5 text-2xl text-center text-white md:text-3xl">
          Kontaktiere uns
        </h2>
        <form className="w-full space-y-4">
          <div>
            <label className="block mb-2 text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Dein Name"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Deine Email"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-white" htmlFor="message">
              Nachricht
            </label>
            <textarea
              id="message"
              placeholder="Deine Nachricht"
              rows="4"
              className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
