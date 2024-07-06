import React from 'react';
import Button from './Button';

interface CustomModalProps {
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
}

const CustomModal = ({
  title,
  children,
  onClose = () => Boolean,
}: CustomModalProps) => {
  return (
    <div className="relative h-0 w-0">
      <div className="bg-slate-100 p-4 w-fit rounded-sm absolute right-0 top-0">
        <div className="flex">
          <h3 className="w-auto text-center">{title}</h3>
          <Button
            className="p-1 hover:opacity-100 w-2"
            label="X"
            onClick={onClose}
          />
        </div>
        {/* Body section */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
