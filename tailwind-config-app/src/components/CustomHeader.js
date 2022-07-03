import { useState } from "react";
import PopupNav from "./PopupNav";

const CustomHeader = () => {

  const [ fixHeader, setfixHeader] = useState(false);
  window.addEventListener('scroll', () => setfixHeader(window.scrollY > 200));

  return (
    <div className={`w-full m-auto fixed flex flex-col justify-center align-center py-6 border-b-2 ${fixHeader ? 'border-light' : 'border-transparent'}`}>
      <PopupNav />
      <div className={`w-full transition-transform m-auto ${fixHeader ? 'hidden' : 'flex' } flex-row justify-center mb-4 align-middle`}>
        <div className="logo w-20 h-20 m-4" />
        <div className="show-name w-32 h-20 m-4 fill-white" />
      </div>
      <div className="w-2/5 m-auto p-2 bg-light px-4 flex flex-row rounded-lg">
        <input placeholder='Search with Google or enter address' className="bg-light text-white w-full google-logo h-8 pl-10 outline-none" />
      </div>
  </div>
  )
}

export default CustomHeader;
