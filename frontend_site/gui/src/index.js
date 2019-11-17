import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Routers}  from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './store/reducers/auth'
import thunk from 'redux-thunk'


const commponseEnhances  = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose

const store = createStore(reducer,commponseEnhances (

    applyMiddleware(thunk)
))

// Way To use Late of Failer here in app(root)
// const app = (
//     <Provider store={store}>
        
//     </Provider>
// )


ReactDOM.render( <Routers><Provider store={store}><App /></Provider></Routers>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
