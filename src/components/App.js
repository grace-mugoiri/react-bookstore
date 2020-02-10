/* eslint-disable import/extensions */
import React from 'react';
import '../styleAssets/App.css';


import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="panel-bg">
        <div className="App-header">

          <div className="App-logo"> Bookstore CMS </div>
          <div className="subtitle-one"> BOOKS </div>
          <div className="subtitle-two"> CATEGORIES </div>
        </div>
        <div className="App-content">
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
