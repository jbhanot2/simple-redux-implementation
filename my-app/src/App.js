import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userDetail} from './actions/myaccount-reducer'

class App extends Component {

  constructor(props){
    super(props);
    this.changeName = this.changeName.bind(this)
  }

  changeName(e){
      this.props.changeName(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input onChange={this.changeName} />
              {this.props.name ? this.props.name : ''}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => { 
  console.log(state, props);
  return{
      name: state.myaccountSettings,
  }
}

const mapDispathToProps = (dispatch, props) => {
  return bindActionCreators({
    changeName: userDetail
  }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(App);
