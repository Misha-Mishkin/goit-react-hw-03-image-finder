import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'proptypes';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  render() {
    const { id, webformatURL, tags, showModal, largeImageURL } = this.props;
    return (
      <li className={s.ImageGalleryItem} key={id}>
        <img
          className={s.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
          onClick={() => showModal({ largeImageURL, tags })}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
