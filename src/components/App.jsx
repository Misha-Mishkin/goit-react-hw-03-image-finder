import React, { Component } from 'react';
import ImageGallery from './ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from './Searchbar';
import { fetchPicture } from './service.api.js';
import s from './App.module.css';
// import Modal from './Modal';
// import Button from './Button';
// import Loader from './Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Bars } from 'react-loader-spinner';

// API: 27053567-d7028909cdd90784b9b54ea6e

// https://pixabay.com/api/?page=1&key=27053567-d7028909cdd90784b9b54ea6e&image_type=photo&orientation=horizontal&per_page=12

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    error: null,
    page: 1,
    status: 'idle',
    totalHits: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ status: 'pending' });
      this.setState({ loading: true });

      fetchPicture(this.state.searchQuery, this.state.page)
        .then(data => {
          if (data.totalHits === 0) {
            this.setState({
              error: alert(`Нет такого запроса ${this.state.searchQuery}`),
            });
          } else {
            this.setState(prevState => ({
              gallery: [...prevState.gallery, ...data.hits],
              totalHits: data.totalHits,
              error: null,
              status: 'resolved',
            }));
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { gallery, loading } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Bars color="#3f51b5" height={40} width={40} ariaLabel="loading" />}
        {gallery && <ImageGallery images={gallery} />}
      </div>
    );
  }
}
