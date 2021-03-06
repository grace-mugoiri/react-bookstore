/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import '../styleAssets/BooksForm.css';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const generateID = () => Math.floor((Math.random() * 1000) + 1);

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { title, category } = this.state;
    if (title === '') {
      this.setState({
        error: 'Title cannot be blank',
      });
    } else {
      this.setState({
        error: null,
      });
    }

    event.preventDefault();

    const { createBook } = this.props;
    const book = {
      id: generateID(),
      title,
      category,
    };

    createBook(book);
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const bookOptions = bookCategories.map((category) => <option key={`book-category-${category}`} value={category}>{category}</option>);

    return (
      <div>
        <h3 id="input-book"> ADD NEW BOOK </h3>
        <div className="error">{this.state.error}</div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" id="input-title" name="title" placeholder="Book title" />
          <select onChange={this.handleChange} name="category">{bookOptions}</select>
          <input type="submit" id="add-book" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
