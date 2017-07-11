import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', render);
}

//  bootstrappy stuff!
// this is just for getting lat lngs for each datum
// no reason to do this every time a user loads it

// this runs it
window.load_and_geocode_data = load_and_geocode_data


var MapboxClient = require('mapbox');
// var madison = require('madison');
var client = new MapboxClient('pk.eyJ1IjoiemlzY2h3YXJ0eiIsImEiOiJjaXhxOXp5eGIwOHJqMzNubnI2Zjh2a2RjIn0.CMKNggl2Se8uH0GEKEJcJw');

// get_latlng("Santa Ana, CA, USA").then(console.log)
// get_latlng("Santa Cruz, CA, USA").then(console.log)


function get_latlng(place_string) {
  return new Promise(function(resolve, reject){
    client.geocodeForward(place_string, function(err, res) {
      if (err){reject(err); return err}
      if (!res['features'] || !res['features'][0]) {
        console.log('error with:', place_string )
        console.log(res)
        reject(res); return res
      }
      resolve(res['features'][0]['center'])
    })
  })
}

import {create_feature} from './components/map.js'
import {download_object} from './utils.js'

function load_and_geocode_data(map) {
  return new Promise(function(resolve, reject){
        require.ensure([], function() {
          var geojson = {features: [],  type: 'FeatureCollection'}
          // let counties = require("../../data/counties.json")
          let marches = require("../data/marches_pre.json")
          // debug!
          // marches = [marches[0], marches[1]]

          let march_promises = marches.map(m=> get_latlng( m['full_place'] ))
          Promise.all(march_promises).then(positions=>{
            for (let [index, pos] of positions.entries()) {
              let march = marches[index]
              let [lat, lng] = [pos[1], pos[0]]
              march.lat = lat
              march.lng = lng
              let f = create_feature(lng, lat, march)
              // console.log(f)
              // let f = create_feature(lng, lat, {id, min, max, lat, lng, city, state, source})
              geojson.features.push(f)
            }
            console.log(geojson)
            download_object("marches_geocoded", geojson)
          })


      }) // end ensure
  }) // end promise, which is returned
} // end load data
