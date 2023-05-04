import React from 'react';
import './Modal.css';

function Modal({ children, active }) {
    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div
                className={active ? 'modal__content active' : 'modal__content'}
                onClick={(e) => e.stopPropagation()}
            >
                <div>{children}</div>
            </div>
        </div>
    );
}
export default Modal;
