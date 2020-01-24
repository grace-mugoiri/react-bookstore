/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookRemoval = this.handleBookRemoval.bind(this);
  }

  handleBookRemoval(book) {
    this.props.deleteBook(book);
  }

  render() {
    // eslint-disable-next-line max-len
    const books = this.props.books.map((book) => <Book key={book.id} book={book} handleBookRemoval={this.handleBookRemoval} />);
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
            {books}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  books: state.books,
});

const mapDispatchProps = (dispatch) => ({
  deleteBook: (book) => dispatch(deleteBook(book)),
});

export default connect(mapStateToProps, mapDispatchProps)(BooksList);
