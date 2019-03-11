import { ADD_TO_CAR, REMOVE_TO_CAR, CLEAN_CAR } from '../constant/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CAR:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [...state, action.productId]

    case CLEAN_CAR:
      return [...initialState.addedIds]

    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CAR:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_TO_CAR:
      return { ...state, [productId]: (state[productId] - 1) }
    case CLEAN_CAR:
      return {}
    default:
      return state
  }
}

// para obtener un pedazo necesario del car se hacen las funciones aqui

export const getQuantity = (state, productId) => state.quantityById[productId] || 0
export const getAddedIds = state => state.addedIds

const deleteToCar = (addedIds, productId) => addedIds.filter(id => id !== productId)
const deleteToQuantity = (quantityById, productId) => {
  const newQuantity = { ...quantityById }
  delete newQuantity[productId]
  return newQuantity
}

const car = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TO_CAR:
      if (getQuantity(state, action.productId) < 2) {
        return {
          addedIds: deleteToCar(state.addedIds, action.productId),
          quantityById: deleteToQuantity(state.quantityById, action.productId)
        }
      }
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}
export default car

