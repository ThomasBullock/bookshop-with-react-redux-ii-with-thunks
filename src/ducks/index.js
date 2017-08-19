import { combineReducers } from 'redux';
import booksReducer from './books';
import bookReducer from './book';
import cartReducer from './cart';

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart: cartReducer
});

export default rootReducer;