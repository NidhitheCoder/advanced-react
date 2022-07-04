import { shortCuts } from "../constants";

const ShortCutContianer = () => {

  return (
    <div className="w-2/4 bg-dark pt-72 m-auto">
      <div className="w-full min-h-36 flex flex-row justify-center gap-2">
        {shortCuts.map((shortcut) => (
          <div className="text-center group text-white hover:bg-light p-6 rounded-md ">
            <div className="flex flex-row  w-full justify-end align-bottom pb-2" >
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark " />
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark mx-1" />
              <div className="h-1 w-1 group-hover:bg-white rounded-full bg-dark" />
            </div>
            <div className="bg-light rounded-t-lg p-2">
              <img className="w-16 h-16" src={shortcut.url} alt={shortcut.name} />
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
