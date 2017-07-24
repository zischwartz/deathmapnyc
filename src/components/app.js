import React from 'react';

require('./app.css')

import Map from './map.js'

// console.log("Hello world")

let skull_url = require("../../img/skull_d2.png")
// let skull_url = require("../../img/skull_d2.png")
require("file-loader?name=image.jpg!../../img/image.jpg");
require("file-loader?name=favicon.ico!../../img/favicon.ico");
// => picture.png

console.log(skull_url)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show_moreinfo: false}
  }
  componentDidMount(){

  }
  render(){
    let info_style = {display:"block"} //this.state.show_moreinfo ? {display:"block"} : {display:"none"}
    return <div id="app">
      <div id="info" style={info_style}>
        <img src={skull_url} style={ {'float':'left', marginTop:-5, width: 20, height:27} }/>
        <div className='title'><strong>Death in New York City</strong></div>
        <p><a className='moreinfo' href="#" onClick={()=> this.setState({show_moreinfo:false})}>More info</a></p>
      </div>
      <Map/>
    </div>
  }
}

// consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         <p>Lorem ipsum dolor sit amet, </p> <p>By <a href="https://twitter.com/zischwartz">Zach Schwartz</a> | <a href="https://github.com/zischwartz/womensmarches">Source Code</a></p>
export default App;
