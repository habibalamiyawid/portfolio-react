import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, service }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{service.s_name}</h2>
        <p>{service.full_desc}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
