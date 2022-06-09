import React, { Component } from 'react';
// import ImageGallery from './ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from './Searchbar';
// import Modal from './Modal';
// import Button from './Button';
// import Loader from './Loader';

// API: 27053567-d7028909cdd90784b9b54ea6e

// https://pixabay.com/api/?page=1&key=27053567-d7028909cdd90784b9b54ea6e&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    searchQuery: '',
    id: '',
    webformatURL: '',
    largeImageURL: '',
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?page=1&key=27053567-d7028909cdd90784b9b54ea6e&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(largeImageURL => this.setState({ largeImageURL }));
  }

  handleFormSubmit = searchQuery => {
    console.log(searchQuery);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery />
        <ImageGalleryItem /> */}
        {/* <Modal /> */}
      </>
    );
  }
}
