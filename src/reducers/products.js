import { combineReducers } from 'redux'

import { PRODUCTS_SUCCESS, PRODUCTS_REQUEST } from '../constant/ActionTypes'



// Esto es una normalizacion por Id para react
const byId = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      return state
  }
}

const byCategory = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.categoria] = obj[product.categoria] || [];
          obj[product.categoria].push(product);
          return obj
        }, {})
      }
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return action.products.map(product => product.id)

    default:
      return state
  }
}

const initialStatus = {
  didInvalid: false,
  isFetching: false,
  lastUpdated: null
}
const status = (state = initialStatus, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, isFetching: true }
    case PRODUCTS_SUCCESS:
      return { ...state, isFetching: false }

    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
  byCategory,
  status
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
