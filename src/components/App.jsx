import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Loader from './Loader';
import Button from './Button';
import { fetchPicture } from './service.api.js';
import s from './App.module.css';


export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    error: null,
    page: 1,
    status: 'idle',
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      this.setState({ loading: true });

      fetchPicture(this.state.searchQuery, this.state.page)
        .then(data => {
          if (data.totalHits === 0) {
            this.setState({
              error: alert(`По Вашему запросу "${this.state.searchQuery}" ничего не найдено`),
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
    this.setState({ searchQuery: searchQuery, gallery: [], page: 1 });
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({ page: prevState + 1 }));
  };

  render() {
    const { gallery, loading, totalHits, page } = this.state;
    const totalPages = totalHits / 12;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {gallery && <ImageGallery images={gallery} />}
        {totalPages > page && (
          <Button text="Load more" handleClick={this.onLoadMoreButton} />
        )}
      </div>
    );
  }
}
