import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}><strong>{b.title}</strong> by {b.author}</li> )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {
              title: titleInput.value,
              author: this.authorInput.value
            };
            this.submitBook(input);
            e.target.reset();
          }}>
            <label htmlFor="name">Title
              <input type="text" name="title" ref={node => titleInput = node}/>
            </label>
            <label htmlFor="author">Author
              <input type="text" name="author" ref={(input) => this.authorInput = input}/>
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);
// The connect method now takes in these 2 functions and returns another functions. 
// The returned function is now passed in the container component.