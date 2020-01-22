/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends React.Component {
  // eslint-disable-next-line no-restricted-syntax
  render() {
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
              <th>Genre</th>
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

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(BooksList);
