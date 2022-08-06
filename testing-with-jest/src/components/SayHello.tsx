import { useEffect, useState } from "react";
import { getCharacter } from "../data";

const SayHello = ({ id }: { id: number }) => {
  const [character, setCharacter] = useState("");
  useEffect(() => {
    setCharacter(getCharacter(id));
  }, [id]);

  if (!character) {
    return null;
  }

  return (
    <div>
      <p>hello welcome</p>
      <p data-testid="character-show">{character}</p>
    </div>
  );
};

export default SayHello;
