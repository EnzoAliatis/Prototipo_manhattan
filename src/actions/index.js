import { loadDB } from '../Firebase'
import * as types from '../constant/ActionTypes'


const requestProducts = () => ({
  type: types.PRODUCTS_REQUEST
})

const receiveProducts = products => ({
  type: types.PRODUCTS_SUCCESS,
  products
})

const fetchProducts = () => async dispatch => {
  dispatch(requestProducts())
  const db = await loadDB()
  const productRef = db.firestore().collection('products')
  productRef.onSnapshot(snapshot => {
    let productsFetched = []
    snapshot.forEach(doc => {
      const id = doc.id
      productsFetched.push({ ...doc.data(), id })
    })
    dispatch(receiveProducts(productsFetched))
  })
}

const shouldFetchProducts = (state, products) => {
  const ids = state.products.visibleIds
  if (ids.length === 0) {
    return true
  } else if (state.products.status.isFetching) {
    return false
  } else {
    console.log('Products are Fetched :)')
  }
}

export const fetchProductsIfNeeded = (products) => {
  return (dispatch, getState) => {
    if (shouldFetchProducts(getState(), products)) {
      return dispatch(fetchProducts())
    }
  }
}


const addToCarUnsafe = productId => ({
  type: types.ADD_TO_CAR,
  productId
})


export const addToCar = productId => (dispatch) => {
  dispatch(addToCarUnsafe(productId))
}


export const removeToCar = productId => ({
  type: types.REMOVE_TO_CAR,
  productId
})

export const cleanCar = () => ({
  type: types.CLEAN_CAR
})




export const saveClientData = clientData => ({
  type: types.SAVE_CLIENT_DATA,
  clientData
})

export const cleanClientData = () => ({
  type: types.CLEAN_CLIENT_DATA
})


export const showAccontData = data => ({
  type: types.SHOW_ACCOUNT_DATA,
  data
})

export const cleanAccountData = () => ({
  type: types.CLEAN_ACCOUNT_DATA
})