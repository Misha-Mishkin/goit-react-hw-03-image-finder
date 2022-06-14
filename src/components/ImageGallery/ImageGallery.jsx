import { Component } from 'react';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';

export default class ImageGallery extends Component {
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
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                showModal={this.showModal}
              />
            );
          })}
        </ul>
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
