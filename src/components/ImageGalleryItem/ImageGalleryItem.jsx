import s from './ImageGalleryItem.module.css';
import PropTypes from 'proptypes';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
          <img className={s.ImageGalleryItem_image}
              src={webformatURL}
              alt={tags}
          />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
