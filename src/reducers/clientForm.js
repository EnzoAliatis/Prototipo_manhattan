import { SAVE_CLIENT_DATA, CLEAN_CLIENT_DATA } from '../constant/ActionTypes'

const initialState = {
  ruc: '',
  cliente: '',
  direccion: '',
  telf: ''
}

const clientData = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_CLIENT_DATA: 
      return {...state, ...action.clientData}

    case CLEAN_CLIENT_DATA:
      return {...initialState}

    default:
      return state
  }
}

export default clientData