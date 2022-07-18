import { useState } from "react";

const Toggle = ({onToggle}) => {
  const[status, setStatus] = useState(true);

  const onToggleChange = () => {
    setStatus(!status);
    onToggle();
  };

  return (
    <div onClick={onToggleChange} className={`bg-active-color rounded-3xl w-10 px-1 h-6 flex flex-row items-center ${status ? 'justify-end' : 'justify-start'}`}>
      <div  className="bg-dark-color rounded-full w-4 h-4" />
    </div>
  )
}

export default Toggle;