import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'proptypes';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from './Modal';
import { RemoveScroll } from 'react-remove-scroll';

class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ),
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      tags: '',
    });
  };

  render() {
    const { images } = this.props;

    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ul>
        {this.state.showModal && (
          <RemoveScroll>
            <Modal
              largeImageURL={this.state.largeImageURL}
              tags={this.state.tags}
              closeModal={this.closeModal}
            />
          </RemoveScroll>
        )}
      </>
    );
  }
}

export default ImageGallery;
