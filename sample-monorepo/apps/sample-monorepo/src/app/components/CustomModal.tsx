import React, { MouseEvent } from 'react';
import Button from './Button';

export enum ModalPosition {
  bottomCenter = 'bottom-center',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  center = 'center',
  topCenter = 'top-center',
  topLeft = 'top-left',
  topRight = 'top-right',
}
interface CustomModalProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  onOutsideClick?: () => void;
  title?: string;
  variant?: ModalPosition;
}

const getModalPositionClass = (currentPosition: ModalPosition) => {
  switch (currentPosition) {
    case ModalPosition.topLeft:
      return 'justify-start items-start';

    case ModalPosition.topRight:
      return 'justify-end items-start';

    case ModalPosition.topCenter:
      return 'justify-center items-start';

    case ModalPosition.bottomLeft:
      return 'justify-start items-end';

    case ModalPosition.bottomRight:
      return 'justify-end items-end';

    case ModalPosition.bottomCenter:
      return 'justify-center items-end';

    default:
      return 'justify-center items-center';
  }
};

const CustomModal = ({
  children,
  className,
  onClose,
  onOutsideClick,
  title,
  variant = ModalPosition.center,
}: CustomModalProps) => {
  const positionClass = getModalPositionClass(variant);

  const onOutsideDivClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      onOutsideClick?.();
    }
  };

  return (
    <div
      onClick={onOutsideDivClick}
      className={`w-full h-full bg-slate-100 bg-opacity-10 absolute right-0 top-0 flex z-50 ${positionClass}`}
    >
      <div
        className={`bg-white h-auto w-1/4 text-red-950 rounded-md ${className}`}
      >
        <div className="flex justify-between items-center">
          {title && <h3 className="w-auto text-center">{title}</h3>}
          {onClose && (
            <Button
              className="p-1 hover:opacity-100 w-2"
              label="X"
              onClick={onClose}
            />
          )}
        </div>
        {/* Body section */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
