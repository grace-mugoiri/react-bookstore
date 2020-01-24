/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Book extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>
          <button type="button" onClick={() => this.props.handleBookRemoval(book)}>
              Remove Book
          </button>
        </td>
      </tr>
    );
  }
}

export default Book;
