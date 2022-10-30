import React from "react";
import TitleBar from "../components/TitleBar";
import BioCard from "../components/BioCard";
import QuoteCard from "../components/QuoteCard";
import Badge from "../components/Badge";

interface MonthCoverProps {
  quote: string;
  author: string;
  imgSrc: string;
  description: string;
}

const MonthCover = ({
  quote,
  author,
  imgSrc,
  description,
}: MonthCoverProps) => {
  return (
    <div className="flex flex-col p-4">
      <Badge text="Quote of the month"/>
      <QuoteCard text={quote} />
      <BioCard name={author} description={description} imgSrc={imgSrc} />
    </div>
  );
};

export default MonthCover;
