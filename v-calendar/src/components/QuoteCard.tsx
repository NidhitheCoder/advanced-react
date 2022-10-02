import React from "react";

interface QuoteCardProps {
  text: string;
}

const QuoteCard = ({ text }: QuoteCardProps) => {
  return (
    <div className="p-4 h-2/5 flex justify-center items-end rounded-sm bg-very-soft-yellow rounded-br-2xl">
      <p className="text-2xl">{text}</p>
    </div>
  );
};

export default QuoteCard;
