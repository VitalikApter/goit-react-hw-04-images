import { useEffect  } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
    
      const handleKeyDown = evt => {
        if (evt.code === 'Escape') {
          onClose();
        }
      };
    
      const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
          onClose();
        }
      };
    return createPortal(
        <div className={css.Overlay} onClick={handleBackdropClick}>
          <div className={css.Modal}>{children}</div>
        </div>,
        modalRoot
    );
  }

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;