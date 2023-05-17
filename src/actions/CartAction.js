import {CartService} from '../services';

const types = {
  GET_CART_ITEMS: 'GET_CART_ITEMS',
  SET_IS_LOADING: 'SET_IS_LOADING',
};

const addToCart = ({productId}) => {
  return dispatch => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.addToCart({productId})
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const removeFromCart = ({productId}) => {
  return dispatch => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.removeFromCart({productId})
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const getCartItems = () => {
  return dispatch => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.getCartItems()
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

export default {types, addToCart, removeFromCart, getCartItems};