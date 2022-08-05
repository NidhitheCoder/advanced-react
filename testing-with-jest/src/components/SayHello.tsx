import { useEffect, useState } from "react";
import { getCharacter } from "../data";

const [character, setCharacter] = useState("");

const SayHello = ({ id }: { id: number }) => {
  useEffect(() => {
    setCharacter(getCharacter(id));
  }, [id]);

  if (!character) {
    return null;
  }

  return <p>hello welcome {character}</p>;
};

export default SayHello;
