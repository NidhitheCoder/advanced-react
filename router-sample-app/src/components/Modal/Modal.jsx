import './style.css'

const Modal = ({onClose}) => {
  return (
    <div className="modal-layout" onClick={onClose}>
      <div className="modal-container">
        <p>Modal title</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Modal;
