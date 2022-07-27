import { useState } from "react";

interface Props {
  name: string
};

const HelloWorld: React.FC<Props> = ({name}) => {
  // const [state, setState] = useState({name: ''});
  // // Overwrite generics
  const [state, setState] = useState<{firstName:string | null}>({firstName: ''});

  return <div>Hello {name}</div>
};

export default HelloWorld;