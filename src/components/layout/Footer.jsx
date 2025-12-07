const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 pb-8 pt-8">
      {/* Grid layout for responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About Us */}
        <div>
          <h2 className="font-bold mb-2">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, at quas impedit ex eum sequi dolorum a, reprehenderit
            saepe molestiae porro!
          </p>
          <h2 className="font-bold mt-4 mb-2">Contact</h2>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@newsportal.com</p>
          <p>Address: 123 News St, Media City</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {[
              "Home",
              "World",
              "Business",
              "Politics",
              "Travel",
              "Sports",
              "Entertainment",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Presence */}
        <div>
          <h2 className="font-bold mb-2">Our Presence</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "California",
              "Texas",
              "Florida",
              "New York",
              "Illinois",
              "Pennsylvania",
              "Ohio",
              "Georgia",
              "India",
              "Australia",
              "Canada",
              "Mexico",
            ].map((state) => (
              <span
                key={state}
                className="bg-gray-600 px-2 py-1 rounded text-sm"
              >
                {state}
              </span>
            ))}
          </div>
          <p className="mt-4">Request a presence in your state!</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-bold mb-2">Subscribe to our Newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-2 outline-blue-600 rounded text-black"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full overflow-hidden mt-8">
        <p className="text-center text-[3.5rem] md:text-[20rem] font-bold opacity-10 select-none -mt-4 md:-mt-12 mb-[-4rem] md:mb-[-10rem]">
          News Portal
        </p>
        <p className="text-center mt-12 md:mt-4 opacity-50">
          &copy; 2024 News Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
