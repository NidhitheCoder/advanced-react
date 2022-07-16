import { useState } from "react";

const PopupNav = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className='w-screen flex justify-end'>
      <button className={`${open ? 'hidden' : 'block' } settings bg-white fill-white m-4 text-white hover:bg-light fixed z-40`} onClick={() => setOpen(!open)} />
      <div className={`${open ? 'flex animate-left ' : 'animate-right '} text-white w-1/5 p-4 h-screen bg-light flex-col `}>
        <div className="w-full flex justify-end items-end p-4 px-2">
          <button className="h-8 text-xs font-medium rounded-sm bg-hovered-color px-4" onClick={() => setOpen(false)}>Close</button>
        </div>
        <div className="p-4 flex flex-col">
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
          <div className="flex flex-row">
            <input type="checkbox" className="text-white mr-4" name="Sponsored shortcuts" value="Sponsored shortcuts" />
            <span>Sponsored shortcuts</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between py-4">
            <h2>Recommended by Pocket</h2>
            <p>Toggle</p>
          </div>
          <p>Exceptional content curated by Pocket, part of the Firefox family</p>
        </div>
        <div className="border-b border-gray-500 p-4">
          <div className="flex flex-row justify-between py-4">
            <h2>Recent activity</h2>
            <p>Toggle</p>
          </div>
          <p>A selection of recent sites and content</p>
        </div>
        <div className="p-4 flex flex-row">
          <p className="settings"></p>
          <a href="someurl">Manage more settings</a>
        </div>
      </div>
    </div>
  );
}

export default PopupNav;