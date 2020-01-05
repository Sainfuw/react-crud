import { SHOW_PRODUCTS, SHOW_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../actions/types'

// state inicial, cada reducer debe tener su propio estado inicial
const initialState = { products: [] }

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case SHOW_PRODUCT:
      return {
        ...state
      }
    case ADD_PRODUCT:
      return {
        ...state
      }
    case EDIT_PRODUCT:
      return {
        ...state
      }
    case DELETE_PRODUCT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default productsReducer