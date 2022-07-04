import { useState } from "react";
import PopupNav from "../components/PopupNav";

const CustomHeader = () => {

  const [ fixHeader, setfixHeader] = useState(false);
  window.addEventListener('scroll', () => setfixHeader(window.scrollY > 200));

  return (
    <div className={`w-full m-auto fixed flex flex-col justify-center align-center py-6 border-b-2 ${fixHeader ? 'border-light' : 'border-transparent'}`}>
      <PopupNav />
      <div className={`w-full transition-transform m-auto py-6 ${fixHeader ? 'hidden' : 'flex' } flex-row justify-center mb-4 align-middle`}>
        <div className="logo w-21 h-21 py-2 mr-2" />
        <div className="show-name w-33 h-21 fill-white" />
      </div>
      <div className="w-3/7 m-auto bg-light px-4 py-3.5 flex flex-row rounded-lg">
        <input placeholder='Search with Google or enter address' className="bg-light text-white w-full google-logo h-8 pl-10 outline-none" />
      </div>
  </div>
  )
}

export default CustomHeader;
