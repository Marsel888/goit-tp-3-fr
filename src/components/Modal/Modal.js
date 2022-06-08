import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { WrapperModal, WrapperOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return createPortal(
    <WrapperOverlay>
      <WrapperModal>{children}</WrapperModal>
    </WrapperOverlay>,
    modalRoot,
  );
}
