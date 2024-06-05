import React from 'react';
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
