import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './store/createStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'
// #region Import Styles


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
serviceWorker.unregister()
