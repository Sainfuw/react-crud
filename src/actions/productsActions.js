import { SHOW_PRODUCTS, SHOW_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from './types'
import axios from 'axios'

export const showProducts = () => async (dispatch) => {
  const result = await axios.get('http://192.168.1.94:3001/api/products')
  dispatch({
    type: SHOW_PRODUCTS,
    payload: result.data
  })
}

export const showProduct = () => {
  return {
    type: SHOW_PRODUCT
  }
}

export const addProduct = () => {
  return {
    type: ADD_PRODUCT
  }
}

export const editProduct = () => {
  return {
    type: EDIT_PRODUCT
  }
}

export const deleteProduct = () => {
  return {
    type: DELETE_PRODUCT
  }
}