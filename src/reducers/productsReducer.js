import { SHOW_PRODUCTS, SHOW_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, REMOVE_STATUS } from '../actions/types'

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
        ...state,
        product: action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.data],
        status: action.payload.status
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(
          product => product.id === action.payload.data.id
          ? product = action.payload.data
          : product),
        status: action.payload.status
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.product.id),
        status: action.payload.status
      }
    case REMOVE_STATUS:
      return {
        ...state,
        status: null
      }
    default:
      return state
  }
}

export default productsReducer