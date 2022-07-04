import { shortCuts } from "../constants";

const ShortCutContianer = () => {

  return (
    <div className="w-2/4 bg-dark pt-72 m-auto">
      <div className="w-full min-h-36 flex flex-row justify-center gap-2">
        {shortCuts.map((shortcut) => (
          <div className="text-center text-white hover:bg-light p-6 rounded-md relative">
            <img className="w-16 h-16" src={shortcut.url} alt={shortcut.name} />
            <p>{shortcut.name}</p>
            {shortcut.sponsored && <p>{shortcut.sponsored}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortCutContianer;
