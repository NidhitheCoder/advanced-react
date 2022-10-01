import React from "react";
import classNames from "classnames";

interface NoteProps {
  text: string;
  bgColor: string;
}

const Note = ({ text, bgColor }: NoteProps) => {
  const noteIconStyle = classNames("h-1 w-1 rounded-full", {
    [bgColor]: true,
  });
  return (
    <div>
      <div className={noteIconStyle} />
      <span className="pl-2 text-dark">{text}</span>
    </div>
  );
};

export default Note;
