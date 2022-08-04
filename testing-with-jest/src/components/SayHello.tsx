import { useEffect } from "react";

const SayHello = ({ id }: { id: number }) => {

  useEffect(() => {
    const getCharactor =() => 'boby'
  }, [])  
  return <p>hello welcome</p>;
};

export default SayHello;
