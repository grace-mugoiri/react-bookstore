/* eslint-disable no-unused-vars */
export const createBook = (book) => ({
  type: 'CREATE_BOOK', book,
});

export const deleteBook = (id) => ({
  type: 'REMOVE_BOOK', id,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER', filter,
});
