
const Toggle = (toggle, onToggle) => {

  return (
    <div onClick={onToggle} className={`bg-active-color rounded-3xl w-10 px-1 h-6 flex flex-row items-center ${toggle ? 'justify-start' : 'justify-end'}`}>
      <div  className="bg-dark-color rounded-full w-4 h-4" />
    </div>
  )
}

export default Toggle;