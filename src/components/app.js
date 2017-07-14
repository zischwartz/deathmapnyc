import React from 'react';

require('./app.css')

import Map from './map.js'

// console.log("Hello world")

let skull_url = require("../../img/skull_d2.png")
// console.log(skull_url)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show_info: true}
  }
  componentDidMount(){

  }
  render(){
    let info_style = this.state.show_info ? {display:"block"} : {display:"none"}
    return <div id="app">
      <div id="info" style={info_style}>
        <img src={skull_url} style={ {'float':'left', marginTop:-5, width: 20, height:27} }/>
        <a className='close' href="#" onClick={()=> this.setState({show_info:false})}>X</a>
        <div className='title'><strong>Death in New York City</strong></div>
        <p>Lorem ipsum dolor sit amet, </p>
        <p>By <a href="https://twitter.com/zischwartz">Zach Schwartz</a> | <a href="https://github.com/zischwartz/womensmarches">Source Code</a></p>
      </div>
      <Map/>
    </div>
  }
}

// consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

export default App;
