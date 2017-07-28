import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends React.Component {
  constructor(props, context) {
      super(props, context);
      
      this.buildCartList = this.buildCartList.bind(this);
  }

  componentDidMount(){
    this.props.fetchCart();
  }
  
  buildCartList() {
    return this.props.items.map( (item, index) => {
      return(
         <tr key={index}>
          <td>{item.title}</td>
          <td>{item.price}</td>
        </tr>     
      )
    })
  }

  render() {
    console.log(this.props.items)
    const booksInCart = (this.props.items) ? this.buildCartList() : []; 
    console.log(booksInCart); 
      return (
          <div>
              <h1>Cart Page</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                {booksInCart}
                </tbody> 
              </table>
          </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.cart
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCart: bookId => dispatch(bookActions.fetchCart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);