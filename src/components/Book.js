/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';

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

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleBookRemoval: PropTypes.func.isRequired,
  // removeBook: PropTypes.func.isRequired,
};

export default Book;
