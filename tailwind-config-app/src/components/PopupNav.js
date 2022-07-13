import { useState } from "react";

const PopupNav = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className='w-screen flex justify-end'>
      <div className={`${open ? 'flex' : 'hidden'} w-1/4 h-screen bg-light absolute right-0 top-0 flex-row-reverse`}>
        <button className="h-1/6 mr-4 bg-[rgba(255, 255, 255, 0.5)]" onClick={() => setOpen(false)}>Close</button>
      </div>
      <button className='settings bg-white fill-white m-4 text-white hover:bg-light' onClick={() => setOpen(!open)} />
    </div>
  );
}

export default PopupNav;