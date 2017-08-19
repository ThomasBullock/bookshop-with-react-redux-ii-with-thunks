
// Actions
export const FETCH_BOOK_BY_ID_SUCCESS = 'FETCH_BOOK_BY_ID_SUCCESS';

// const action = name => ''

// Action Creators
export const fetchBookById = () => ({ type: 'FETCH_BOOK_BY_ID_SUCCESS'});


// Reducer

// For handling a single book
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOK_BY_ID_SUCCESS':
      return action.book;
    default:
      return state;
  }
};

export default bookReducer;