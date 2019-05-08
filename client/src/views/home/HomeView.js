import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHelloWorld } from '../../store/actions/helloWorldAction'
import axios from 'axios'
import { API_URL } from '../../config'


class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      customers:''
    }
  }
  componentDidMount() {
    var self = this;
    this.props.getHelloWorld("Merhaba React!")


    axios.get(API_URL + 'api/account')
      .then(function (response) {
        // handle success
        console.log(response.data);
        self.setState({
          customers:response.data.account
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h1>{this.props.helloWorld}</h1>
        <ul>
          {
            this.state.customers
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  helloWorld: state.helloWorldReducer.helloWorld,
})
const mapDispatchToProps = {
  getHelloWorld
};

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView)
export default HomeView