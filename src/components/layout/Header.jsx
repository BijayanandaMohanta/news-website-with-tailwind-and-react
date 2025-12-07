import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-600 text-white flex justify-between text-sm px-2 py-3">
        <div>Phone : +123 456 7890 | Email : info@example.com</div>
        <div>Follow us on: Facebook | Twitter | Instagram</div>
      </div>

      {/* Logo */}
      <div className="text-center">
        <h1 className="text-4xl font-bold my-4">News Portal</h1>
      </div>

      {/* Categories */}
      <nav className="bg-gray-100 z-10 sticky top-0 p-2 flex  md:justify-center">
        {/* Mobile toggle */}
        <div className="relative md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 border rounded bg-white"
          >
            Categories
          </button>

          {/* Dropdown menu */}
          {open && (
            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg flex flex-col z-20">
              <Link
                to="/"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/world"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                World
              </Link>
              <Link
                to="/politics"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Politics
              </Link>
              <Link
                to="/business"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Business
              </Link>
              <Link
                to="/technology"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/sports"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Sports
              </Link>
              <Link
                to="/entertainment"
                className="nav-link p-2"
                onClick={() => setOpen(false)}
              >
                Entertainment
              </Link>
            </div>
          )}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex md:space-x-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/world" className="nav-link">
            World
          </Link>
          <Link to="/politics" className="nav-link">
            Politics
          </Link>
          <Link to="/business" className="nav-link">
            Business
          </Link>
          <Link to="/technology" className="nav-link">
            Technology
          </Link>
          <Link to="/sports" className="nav-link">
            Sports
          </Link>
          <Link to="/entertainment" className="nav-link">
            Entertainment
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
