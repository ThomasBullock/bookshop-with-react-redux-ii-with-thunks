// ./src/reducers/bookReducer.js
import * as actionTypes from '../actions/actionTypes';
// For handling array of books
export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.book)
        ];
    case 'FETCH_BOOKS_SUCCESS':
          return action.books;
    default:
          return state;
  }
};


// For handling a single book
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOK_BY_ID_SUCCESS':
      return action.book;
    default:
      return state;
  }
};
// This time the reducers are named so we can use named import to 
// gain access to them from the root reducer file:




// export default (state = [], action) => {
//   switch (action.type){
//     // Check if action dispatched is
//     // CREATE_BOOK and act on that
//     case 'CREATE_BOOK':
//     		return [
//     			...state,
//     			Object.assign({}, action.book)
//     		]
//         state.push(action.book);
//     default:
//           return state;
//   }
// };