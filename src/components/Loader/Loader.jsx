import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Bars } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <Bars
        color="#3f51b5"
        height={50}
        width={50}
        ariaLabel="loading"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    );
  }
}
