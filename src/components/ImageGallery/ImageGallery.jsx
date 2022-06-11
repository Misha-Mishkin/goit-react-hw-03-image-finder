import s from './ImageGallery.module.css';
import PropTypes from 'proptypes';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            smallImage={webformatURL}
            largeImage={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGallery;
