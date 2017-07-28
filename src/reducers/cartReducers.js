export default (state = [], action) => {
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