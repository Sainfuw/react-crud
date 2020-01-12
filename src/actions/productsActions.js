import { SHOW_PRODUCTS, SHOW_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, REMOVE_STATUS } from './types'
import axios from 'axios'

export const showProducts = () => async dispatch => {
  const result = await axios.get('http://192.168.1.94:3001/api/products')
  dispatch({
    type: SHOW_PRODUCTS,
    payload: result.data
  })
}

export const showProduct = payload => async dispatch => {
  const result = await axios.get(`http://192.168.1.94:3001/api/products/${payload}`)
  dispatch({
    type: SHOW_PRODUCT,
    payload: result.data
  })
}

export const addProduct = payload => async dispatch => {
  const result = await axios.post(`http://192.168.1.94:3001/api/products`, payload)
  dispatch({
    type: ADD_PRODUCT,
    payload: result
  })
}

export const updateProduct = payload => async dispatch =>  {
  const result = await axios.put(`http://192.168.1.94:3001/api/products/${payload.id}`, payload)
  dispatch({
    type: UPDATE_PRODUCT,
    payload: result
  })
}

export const deleteProduct = payload => async dispatch =>  {
  const result = await axios.delete(`http://192.168.1.94:3001/api/products/${payload}`)
  debugger
  dispatch({
    type: DELETE_PRODUCT,
    payload: { status: result.status, id: payload }
  })
}

export const removeStatus = () => dispatch => {
  dispatch({
    type: REMOVE_STATUS
  })
}
