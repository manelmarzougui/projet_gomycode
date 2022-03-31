import axios from 'axios'
import {
  ADD_ITEMS,
  ADD_ITEMS_SUCCESS,
  CLEAR_ITEMS,
  GET_CART,
} from '../const/cart'
export const addTOCart =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: ADD_ITEMS })
    try {
      let result = await axios.get(`product/${id}`)
      dispatch({ type: ADD_ITEMS_SUCCESS, payload: result.data.result })
    } catch (error) {
      console.log(error)
    }
  }

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CLEAR_ITEMS })
  try {
    dispatch({ type: CLEAR_ITEMS })
  } catch (error) {
    console.log(error)
  }
}

export const getItems = () => async (dispatch) => {
  dispatch({ type: GET_CART })
  try {
    dispatch({
      type: ADD_ITEMS_SUCCESS,
      payload: localStorage.getItem('cartItems'),
    })
  } catch (error) {
    console.log(error)
  }
}
