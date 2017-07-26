import React from 'react';

require('./app.css')

import Map from './map.js'

// console.log("Hello world")

let skull_url = require("../../img/skull_d2.png")
// let skull_url = require("../../img/skull_d2.png")
require("file-loader?name=deathmapnyc.jpg!../../img/deathmapnyc.jpg");
require("file-loader?name=favicon.ico!../../img/favicon.ico");
// => picture.png

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show_moreinfo: false}
  }
  componentDidMount(){

  }
  render(){
    let p_style = this.state.show_moreinfo ? {display:"block"} : {display:"none"}
    let label = this.state.show_moreinfo ? 'Less': 'More info'
    let readme = "https://github.com/zischwartz/deathmapnyc#death-map-nyc"
    let limitations = "https://github.com/zischwartz/deathmapnyc#limitations--caveats"
    // style={p_style}
    return <div id="app">
      <div id="info">
        <img src={skull_url} style={ {'float':'left', marginTop:-3, width: 20, height:27} }/>
        <div className='title'>
          <strong>Death Map NYC</strong>
          <a className='moreinfo' href="#" onClick={()=> this.setState({show_moreinfo:!this.state.show_moreinfo})}>{label}</a>
        </div>
        <p style={p_style}>This is a map of deaths that occurred in New York City in 2015 and 2016 based on available data.</p>
        <p style={p_style}>For some categories/data-sources there's data going as far back as 2006. Check the "Show All Years" button to see that.</p>
        <p style={p_style}><a href={readme}>More information</a> & <a href={limitations}>limitations</a></p>
      </div>
      <Map/>
    </div>
  }
}

// consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         <p>Lorem ipsum dolor sit amet, </p> <p>By <a href="https://twitter.com/zischwartz">Zach Schwartz</a> | <a href="https://github.com/zischwartz/womensmarches">Source Code</a></p>
export default App;
