
// Actions
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';

// const action = name => ''

// Action Creators

export const fetchBooks = () => ({ type: 'FETCH_BOOKS_SUCCESS'});
export const createBook = () => ({ type: 'CREATE_BOOK_SUCCESS'});


// Reducer

const booksReducer = (state = [], action) => {
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

export default booksReducer;