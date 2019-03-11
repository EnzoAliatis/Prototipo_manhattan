import { combineReducers } from 'redux'
import car, * as fromCar from './car'
import products, * as fromProducts from './products'
import clientForm from './clientForm'
import accountSelected from './accountSelected'

export default combineReducers({
  car,
  products,
  clientForm,
  accountSelected
})

const getAddedIds = state => fromCar.getAddedIds(state.car)
const getQuantity = (state, id) => fromCar.getQuantity(state.car, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    ).toFixed(2)


export const getCarProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
