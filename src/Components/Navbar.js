import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../Context";
const Navbar = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);

  return (
    <div id="navbar" className={isLight ? "light" : "dark"}>
      <h2>
        M<span className={isLight ? "light" : "sky"}>o</span>ha
        <span className={isLight ? "light" : "sky"}>m</span>
      </h2>
      <Link className={isLight ? "light" : "dark"} id="link" to="/">
        Home
      </Link>
      <Link className={isLight ? "light" : "dark"} id="link" to="/About">
        About
      </Link>
      <Link className={isLight ? "light" : "dark"} id="link" to="/Blog">
        Blog
      </Link>
      <Link className={isLight ? "light" : "dark"} id="link" to="/Contact">
        Contact
      </Link>
      <Link className={isLight ? "light" : "dark"} id="link" to="/More">
        More
      </Link>
      <button className={isLight ? "light" : "dark"}>Login</button>
      <button className={isLight ? "light" : "outline"}>Contact us</button>
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        changeTheme
      </button>
    </div>
  );
};
export default Navbar;
