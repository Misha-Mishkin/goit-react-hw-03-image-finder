import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'proptypes';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    showModal: PropTypes.func,
  };

  render() {
    const { id, webformatURL, tags, showModal } = this.props;
    return (
      <li className={s.ImageGalleryItem} key={id}>
        <img
          className={s.ImageGalleryItem_image}
          src={webformatURL}
          alt={tags}
          onClick={showModal}
          // largeImageURL={largeImageURL}
        />
      </li>
    );
  }
}