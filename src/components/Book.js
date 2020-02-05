/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import '../styleAssets/Book.css';

class Book extends React.Component {
  render() {
    const { book: { id, title, category }, handleBookRemoval } = this.props;
    return (
      <div className="lesson-panel">
        <div className="first">
          <h5 className="cat">{category}</h5>
          <h2 className="title">{title}</h2>
          <p>Tesa Kent</p>
          <div className="utils">
            <div className="comment"> Comments </div>
            <div className="remove"><button type="button" onClick={() => handleBookRemoval(id)}> Remove </button></div>
            <div className="edit"> Edit </div>
          </div>
        </div>
        <div className="second" />
        <div className="third">
          <h5 className="curChap">CURRENT CHAPTER</h5>
          <h5 className="chapNum"> CHAPTER 17</h5>
          <div className="update">UPDATE PROGRESS</div>
        </div>
      </div>
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
};

export default Book;
