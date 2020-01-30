/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookRemoval = this.handleBookRemoval.bind(this);
  }

  handleBookRemoval(book) {
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  render() {
    const { books } = this.props;
    const bookComponents = books.map((book => {
      const { id } = book;
      return <Book key={id} book={book} handleBookRemoval={this.handleBookRemoval} />;
    }));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {bookComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchProps = (dispatch) => ({
  deleteBook: (book) => dispatch(deleteBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(BooksList);
