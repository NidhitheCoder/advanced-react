import { shortCuts } from "../constants";

const ShortCutContianer = () => {

  return (
    <div className="w-2/4 bg-dark pt-72 m-auto">
      <div className="w-full min-h-36 flex flex-row justify-center gap-2">
        {shortCuts.map((shortcut) => (
          <div className="text-center group text-white hover:bg-light py-2 rounded-md ">
            <div className="flex flex-row  w-full justify-end align-bottom pb-2 pr-2" >
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark " />
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark mx-1" />
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark" />
            </div>
            <div className="bg-dark-color rounded-lg opacity-80 p-2 mx-4">
              <img className="w-14 h-14 rounded-lg" src={shortcut.url} alt={shortcut.name} />
              <p>{shortcut.name}</p>
              {shortcut.sponsored && <p>{shortcut.sponsored}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortCutContianer;
