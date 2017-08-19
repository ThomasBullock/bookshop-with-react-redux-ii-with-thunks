// Actions

export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';

// Action Creators
export const addToCartSuccess = () => ({ type: 'ADD_TO_CART_SUCCESS'});
export const fetchCartSuccess = () => ({ type: 'FETCH_CART_SUCCESS'});

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
    	console.log(action.item)
      return action.item;
    case 'FETCH_CART_SUCCESS':
      return action.items;
    default:
      return state;
  }
};

export default cartReducer;