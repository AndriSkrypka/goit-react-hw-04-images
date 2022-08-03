import { useEffect } from 'react';

import PropTypes from 'prop-types';

import css from './Modal.module.css';



const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const onTap = elem => {
      if (elem.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onTap);
  
 return () => {
      window.removeEventListener('keydown', onTap);
    };
  }, [onClose]);

  
  
  const handkerBackDrop = elem => {
    if (elem.target === elem.currentTarget) {
      onClose();
    }
  };

    return (
      <div className={css.backdrop} onClick={handkerBackDrop}>
        <div className={css.modal}>
          <img className={css.modalImg} src={image} alt="" />
        </div>
      </div>
    );
  }

  Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };


