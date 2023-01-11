import { useContext } from "react";
import ThemeContext from "../Context";
const Mid = () => {
  const { isLight, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div id="mid" className={isLight ? "light" : "dark"}>
        <h1>
          Get The <span className={isLight ? "light" : "sky"}>Right Job </span>
          you Deserved
        </h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
      </div>
      <div id="inputField" className={isLight ? "light" : "dark"}>
        <input
          className="inputBox"
          type="text"
          placeholder="Job title and keyword"
        />
        <button id="submitbtn">Submit</button>
      </div>
    </>
  );
};
export default Mid;
