/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Book extends React.Component {
  render() {
    const { book: { id, title, category }, handleBookRemoval } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <button type="button" onClick={() => handleBookRemoval(id)}>
              Remove Book
          </button>
        </td>
      </tr>
    );
  }
}

export default Book;
