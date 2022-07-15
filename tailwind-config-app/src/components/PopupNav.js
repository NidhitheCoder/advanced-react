import { useState } from "react";

const PopupNav = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className='w-screen flex justify-end'>
      <button className={`settings bg-white fill-white m-4 text-white hover:bg-light`} onClick={() => setOpen(!open)} />
      <div className={`${open ? 'flex animate-left ' : 'hidden animate-right '} text-white w-1/5 p-8 pt-4 pr-4 h-screen bg-light flex-col `}>
        <div className="w-full flex justify-end items-end pb-4">
          <button className="h-8 text-xs font-medium rounded-sm bg-hovered-color px-4" onClick={() => setOpen(false)}>Close</button>
        </div>
        <div className="py-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="font-bold">ShortCuts</p>
            <p>toggle</p>
          </div>
          <p className="text-xs py-2">Sites you save or visit</p>
          <select name="row" id="row" className="w-2/6 bg-light border-2 rounded-md p-1 my-2 border-solid border-hovered-color">
            <option value="1">1 row</option>
            <option value="2">1 rows</option>
            <option value="3">3 rows</option>
            <option value="4">4 rows</option>
          </select>
          <input type="checkbox" className="text-white" name="Sponsored shortcuts" value="Sponsored shortcuts" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default PopupNav;