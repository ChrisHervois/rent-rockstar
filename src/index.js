import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import App from './components/App'
import ItemForm from './components/item_form'
import ItemList from './components/Item_List'
import Cart from './components/Cart'
import ReserveForm from './components/Reserve_Form'
import Login from './components/Login'
import User from './components/User'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/reserve" component={ReserveForm} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/add" component={ItemForm} />
                    <Route exact path="/browse" component={ItemList} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/edit/:id" component={ItemForm} />
                    <Route exact path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
