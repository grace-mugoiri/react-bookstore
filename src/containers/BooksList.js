/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const filterBooks = (books, filter) => {
  if (filter === 'All') {
    return books;
  }
  return books.filter((book) => book.category === filter);
};

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookRemoval = this.handleBookRemoval.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleBookRemoval(book) {
    const { deleteBook } = this.props;
    deleteBook(book);
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    changeFilter(event.target.value);
  }

  render() {
    const { books } = this.props;
    const bookComponents = filterBooks(books.map((book) => {
      const { id } = book;
      return <Book key={id} book={book} handleBookRemoval={this.handleBookRemoval} />;
    }));

    return (
      <div>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
        <div>
          { bookComponents }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchProps = (dispatch) => ({
  deleteBook: (book) => dispatch(deleteBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
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
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(BooksList);
