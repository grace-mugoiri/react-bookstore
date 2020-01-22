/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookGenres: ['Action and Adventure', 'Anthology', 'Chick lit', 'Crime', 'Drama', 'Fantasy'],
    };
  }

  render() {
    const { bookGenres } = this.state;
    return (
      <div className="bookForm">
        <h2>Books Form:</h2>
        <form>
          <input type="text" name="title" />
          <select name="category">{bookGenres}</select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BooksForm;
