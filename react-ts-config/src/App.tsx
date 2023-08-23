import "./style.css";
import Image from "./assets/sun_boat.jpg";
import Logo from "./assets/logo.svg";

export const App = () => {
  return (
    <>
      <h1>React typescript template</h1>
      <img src={Logo} alt="sun" height="300" width="300" />
      <img src={Image} alt="sun" height="300" width="300" />
    </>
  );
};
