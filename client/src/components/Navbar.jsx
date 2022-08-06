import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const handleOpenMenu = () => {
    setOpen(true);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <nav className="flex">
        <ul className="menu-item-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about" className="inactive">
              About
            </a>
          </li>
          <li>
            <a href="/business" className="inactive">
              Business
            </a>
          </li>
          <li>
            <a href="/politics" className="inactive">
              Politics
            </a>
          </li>
          <li>
            <a href="/health" className="inactive">
              Health
            </a>
          </li>
          <li>
            <a href="/science" className="inactive">
              Science
            </a>
          </li>
        </ul>
        <div className="menu-item-sm" onClick={handleOpenMenu}>
          {<FiMenu />}
        </div>
        <div className={!open ? "none close" : "menu open"}>
          <div onClick={handleCloseMenu}>{<AiOutlineClose />}</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about" className="inactive">
                About
              </a>
            </li>
            <li>
              <a href="/business" className="inactive">
                Business
              </a>
            </li>
            <li>
              <a href="/politics" className="inactive">
                Politics
              </a>
            </li>
            <li>
              <a href="/health" className="inactive">
                Health
              </a>
            </li>
            <li>
              <a href="/science" className="inactive">
                Science
              </a>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <form action="" className="flex">
            <input type="text" placeholder="Search" />
            <button type="submit">{<BsSearch />}</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
