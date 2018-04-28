# Intro to Redux - Book List App

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

## Learned in this Project ##

- Here, we use Redux for application state control :pencil:

- Reducer - function that returns a peace of state
- Entire application state is built from individual reduces in the [index.js](./src/reducers/index.js) using **combineReducers** function
- Reducer can return static data (e.g [BooksReducer](./src/reducers/reducer_books.js))
- When controller needs to be aware of the state or piece of state, we promote it from **controller** to **container**
  * import { connect } from *react-redux*
  * mapStateToProps(state) function to return the piece of state we need
  * export default connect(mapStateToProps)(*Component*) (e.g. [BookList](./src/containers/book-list.js)) 
  * We do this to a component that is interesed in this particular piece of data
- We can also have dynamic piece of state that changes over time (e.g. [activeBook](./src/reducers/reducer_active_book.js))
- For this we use **Action Creators**
  * **Action Creator** returns and **object** that contains the *type* of action and optionally relevant *data* - We call this object an **Action**
  * **Action** gets sent to all reducers and they decide if they are interested in given type of action  and therefore change their piece of **state**
  * The new value of **state** will include the value that interested reducer **returns** back
  * Newly assembled state notifies the containers and containers get **re-rendered**

  ### Examples of Actions and Actions creators in the project

  - ```selectBook``` is an action creator which returns an Action object with action type BOOK_SELECTED (see [index.js](./src/actions/index.js))
  - This action gets wired to ```book-details``` reducer using ```mapDispatchToProps(dispatch)``` function (see [BooksReducer](./src/reducers/reducer_books.js)) - This ensures that this reducer gets informed when ```selectBook``` is called
  - This action creator is called on onClick event referenced as ```this.props.selectBook(book)``` passing the book it was clicked on (see [BookList](./src/containers/book-list.js))  
  - Active Books reducer checks for BOOK_SELECTED action and returns payload which in this case is book (see [activeBook](./src/reducers/reducer_active_book.js))

  
- See the example of conditional redering in [BookDetails](./src/containers/book-details.js) container - covering the initial state when activedBook is not defined (or null)
