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

  const changeId = () => {
    setCharacter(getCharacter(111));
  }

  return (
    <div>
      <p>hello welcome</p>
      <p data-testid="character-show">{character}</p>
      <button data-testid="change-button" onClick={changeId}>Change id</button>
    </div>
  );
};

export default SayHello;
