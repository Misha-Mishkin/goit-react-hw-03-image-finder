import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return;
    }
    onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.Searchbar_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
