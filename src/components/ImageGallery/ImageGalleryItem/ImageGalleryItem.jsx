import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.scss';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({image}) => {
 
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

    return (
      <>
        <img className={css.image} src={image.webformatURL} alt={image.tags}   onClick={toggleModal}/>
        {showModal && (
          <Modal 
          onClose={toggleModal}
          >
            <img
            src={image.largeImageURL}
            alt={image.tags}
          />
          </Modal>
        )}
      </>
    );
  }

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;