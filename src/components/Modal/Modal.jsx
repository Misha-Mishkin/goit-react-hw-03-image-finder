import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'proptypes';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    };
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    };
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img
            src={largeImageURL}
            alt={tags}
          />
        </div>
      </div>,
      modalRoot
    );
  };
}

export default Modal;
