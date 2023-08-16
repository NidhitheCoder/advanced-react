import "./style.css";
import Image from "./assets/sub_boat.jpg";

export const App = () => {
  return (
    <>
      <h1>React typescript template</h1>
      <Image src={Image} alt="sun" height="300" width="300" />
    </>
  );
};
