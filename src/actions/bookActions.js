import Axios from 'axios';

// API URL
// const apiUrl = 'http://www.mockapi.io/projects/591e0c4b1c8911001140d320/api/book';
const apiUrl = 'https://5979ace680bdcc0011d737c9.mockapi.io/api/books';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};
//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        console.log('successfully got books')
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  }
};
// export const createBook = (book) => {
//   // Return action
//   return {
//     // Unique identifier
//     type: 'CREATE_BOOK',
//     // Payload
//     book: book
//   }
// };