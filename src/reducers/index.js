import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookRecucer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook : ActiveBookRecucer
});

export default rootReducer;
