import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, [action.payload.id]: action.payload }
        case REMOVE_FROM_CART:
            let copy = Object.assign({}, state)
            delete copy[action.payload]
            return copy
        default:
            return {...state}
    }
}