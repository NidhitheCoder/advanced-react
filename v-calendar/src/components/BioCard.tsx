import React from "react";

interface BioCardProps {
  name: string;
  description: string;
  imgSrc?: string;
}

const BioCard = ({ name, description, imgSrc }: BioCardProps) => {
  return (
    <div className="p-4 h-auto w-full flex justify-between items-center flex-col gap-2 md:flex-row rounded-sm text-very-dark-cyan">
      <div className="flex flex-col">
        <p className="text-lg font-bold">{`- ${name}`}</p>
        <p>{description}</p>
      </div>
      <div>
        <img src={imgSrc} alt="person" />
      </div>
    </div>
  );
};

export default BioCard;
