/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const bookGenres = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const generateID = () => parseInt(Math.random() * 100, 10);

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
    const { name } = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.createBook({
      id: generateID(),
      title: this.state.title,
      category: this.state.category,
    });

    this.setState({
      title: '',
      category: 'Action',
    });
    event.target.reset();
  }

  render() {
    // eslint-disable-next-line max-len
    const bookOptions = bookGenres.map((category) => <option key={category} value={category}>{category}</option>);

    return (

      <div className="book-form">
        <h2>Books Form:</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" />
          <select onChange={this.handleChange} name="category">{bookOptions}</select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchProps)(BooksForm);
