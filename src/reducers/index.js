import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ItemsReducer from './reducer_items'
import CartReducer from './reducer_cart'

const rootReducer = combineReducers({
    items: ItemsReducer,
    cart: CartReducer,
    form: formReducer
});

export default rootReducer;
