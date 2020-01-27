/* eslint-disable no-restricted-syntax */
import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

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
    event.preventDefault();
    const { title, category } = this.state;
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
        <h3>Books form:</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" />
          <select onChange={this.handleChange} name="category">{bookOptions}</select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
