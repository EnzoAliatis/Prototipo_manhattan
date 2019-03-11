import { SHOW_ACCOUNT_DATA, CLEAN_ACCOUNT_DATA } from '../constant/ActionTypes'

const initialState = [{cabecera:{}, detalle:[], valores:{total:'0.00'}}]


const accountSelected = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_ACCOUNT_DATA:
      return [...action.data]
    case CLEAN_ACCOUNT_DATA:
      return [...initialState]
    default:
      return state
  }
}

export default accountSelected