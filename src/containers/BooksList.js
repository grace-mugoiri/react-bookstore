/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends React.Component {
  // eslint-disable-next-line no-restricted-syntax
  render() {
    // eslint-disable-next-line arrow-body-style
    const books = this.props.books.map((book) => {
      return <Book key={book.id} book={book} handleBookRemoval={this.handleBookRemoval} />;
    });
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

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
