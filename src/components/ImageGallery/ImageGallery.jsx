import { Component } from 'react';
// import Loader from 'components/Loader';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { Bars } from 'react-loader-spinner';

import s from './ImageGallery.module.css';
// import proptypes from 'proptypes';

class ImageGallery extends Component {
  strate = {
    gallery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=27053567-d7028909cdd90784b9b54ea6e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        // .then(console.log)
        .then(gallery => this.setState({ gallery }));
    }
  }

  render() {
    return (
      <ul className={s.ImageGallery}>
        <li>{this.props.searchQuery}</li>
      </ul>
    );
  }
}

export default ImageGallery;

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
