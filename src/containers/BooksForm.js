/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { connect } from 'react-redux';

const bookGenres = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  render() {
    // eslint-disable-next-line max-len
    const bookOptions = bookGenres.map((category) => <option key={category} value={category}>{category}</option>);

    return (

      <div className="book-form">
        <h2>Books Form:</h2>
        <form>
          <input type="text" name="title" />
          <select name="category">{bookOptions}</select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect()(BooksForm);
