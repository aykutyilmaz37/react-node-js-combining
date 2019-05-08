import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// #region Import Styles
import 'bootstrap/dist/css/bootstrap.min.css'
// #endregion

// #region Import Views Jsx
import Layout from '../layout/Layout'
import HomeView from '../views/home/HomeView'
// #endregion

export default class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact strict component={HomeView} />
          </Layout>
        </Switch>
      </BrowserRouter>

    )
  }
}
