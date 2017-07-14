import React from 'react';
import mapboxgl from 'mapbox-gl'
import LegendControl from './legend.js'
import {getDistance} from '../utils.js'
let skull_url = require("../../img/skull_d2.png")
// console.log(skull_url)

mapboxgl.accessToken = 'pk.eyJ1IjoiemlzY2h3YXJ0eiIsImEiOiJjaXhxOXp5eGIwOHJqMzNubnI2Zjh2a2RjIn0.CMKNggl2Se8uH0GEKEJcJw'
window.mapboxgl = mapboxgl

// let nyc_simpler = require("../../data/nyc_simpler.json")

// Southwest coordinates
// Northeast coordinates
var bounds = [
  [ -74.74196394032323,  40.3494562505725],
  [ -73.15855939931218, 41.093616974660364]
]

// the actual react component we export, Map
//
class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {vehicle:true, criminal:true, by_police:true, work: true}
  }
  get_active_kinds(){
    let res = []
    for (let [k,v] of Object.entries(this.state)){  if (v) { res.push(k[0])}  }
    return res
  }
  flip(k){
    let obj = {[k]:!this.state[k]}
    this.setState(obj)
  }
  componentDidMount(){
    if (!mapboxgl.supported()) {
      alert('Your browser does not support Mapbox GL');return;
    }
    // make_map is a helper below
    make_map(this.refs.mapboxMap).then(load_data).then(([geojson, map])=> {
      window.map = map //debug
      this.mb_map = map
      map.addSource('data', {
        type: 'geojson',
        data: geojson,
        // cluster: true, // https://www.mapbox.com/mapbox-gl-js/example/cluster/ // clusterRadius: 25 // default is 50
      })
      let image = new Image(40,53)
      image.src = skull_url
      map.addImage('skull_d2_image', image, {width: 40, height: 53});
      map.addLayer(point_layer_obj())
      var popup = new mapboxgl.Popup({
           closeButton: false,
           closeOnClick: false
       });
      map.on('mouseenter', 'point', function(e) {
          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer';

          // Populate the popup and set its coordinates
          // based on the feature found.
          let d = e.features[0].properties.d
          popup.setLngLat(e.features[0].geometry.coordinates)
              .setHTML(new Date(d).toDateString() )
              .addTo(map);
      });

      map.on('mouseleave', 'point', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
      });
  // });

      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.GeolocateControl({  positionOptions: {   enableHighAccuracy: true }}))
      // setTimeout(()=> map.zoomIn() , 500)
    })
  }
  render() {
    console.log(this.get_active_kinds())
    // let kinds =
    // ["in", "k", ].concat(kinds)
    if (this.mb_map){
      this.mb_map.setFilter('point', ['in', 'k'].concat(this.get_active_kinds()) )
    }

    return (<div>
              <nav id='filter-group' className='filter-group'>
                <input type="checkbox" id="vehicle" checked={this.state.vehicle} onChange={e=>this.flip('vehicle')} /><label htmlFor="vehicle">Vehicle</label>
                <input type="checkbox" id="criminal" checked={this.state.criminal} onChange={e=>this.flip('criminal')} /><label htmlFor="criminal">Criminal</label>
                <input type="checkbox" id="by_police" checked={this.state.by_police} onChange={e=>this.flip('by_police')} /><label htmlFor="by_police">By Police</label>
                <input type="checkbox" id="work" checked={this.state.work} onChange={e=>this.flip('work')} /><label htmlFor="work">Work</label>
              </nav>
            <div ref="mapboxMap" id="map"/></div>);
  }
}

export default Map;


// Helpers !
// -------------------

function load_data(map) {
  let counts = {}
  return new Promise(function(resolve, reject){
        require.ensure([], function() {
          let records = require("../../data/deaths.json")
          var geojson = {features: [],  type: 'FeatureCollection'}
          for (let [index, record] of records.entries()) {
            // for dupe locations, move them slightly
            let loc_string = `${record.lng} ${record.lat}`
            if (counts[loc_string]){
              counts[loc_string]+=1
              record = adjust_location(record, counts[loc_string])
            }
            else { counts[loc_string]=1 }
            // and this is where we'd put a multiple record for same loc
            let f = create_feature(record.lng, record.lat, record)
            geojson.features.push(f)
          }
          resolve([geojson, map])


      }) // end ensure
  }) // end promise, which is returned
} // end load data


// let records = [{lng:-73.8232488, lat:40.76131858}, {lng:-73.8232488, lat:40.76131858},{lng:-73.8232488, lat:40.76131858},{lng:-73.8232488, lat:40.76131858},{lng:-73.8232488, lat:40.76131858},{lng:-73.8232488, lat:40.76131858},{lng:-73.8232488, lat:40.76131858}]
// for testing adjust_location

// if the location already has a record, adjust them manually
// this is the "jitter" thing from the first version, but better
// could just leave icon-allow-overlap false, but this shows magnitude
function adjust_location(record, count){
  if (count==2) {
    record["lng"] -= 0.0005
    record["lat"] += 0.0005
  }
  if (count==3) {
    record["lng"] -= 0.0005
    record["lat"] -= 0.0005
  }
  if (count==4) {
    record["lng"] += 0.0005
    record["lat"] += 0.0005
  }
  if (count==5) {
    record["lng"] += 0.0005
    record["lat"] -= 0.0005
  }
  if (count==6) {
    record["lng"] -= 0.0008
  }
  if (count==7) {
    record["lng"] += 0.0008
  }
  return record
}

// actually make a map, via a promise . todo, pass in options
//
function make_map(container){
  // console.log('make map called, about to promise')
  // console.log(mapboxgl.version)
  return new Promise(function(resolve, reject){
    let map = new mapboxgl.Map({
          container: container, // can be element or element id
          // style: 'mapbox://styles/mapbox/streets-v9',
          zoom: 11.5,
          minZoom: 9,
          maxZoom: 15,
          center:[-73.97661209106445,40.714736512395284],
          // center:[-99, 40],
          maxBounds: bounds, // Sets bounds as max
          // style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
          style: toner_layer_style(), //hosted style id
      })
    map.on('load', ()=> resolve(map) )
  })
}

// export function create_feature(lng, lat, properties={}){
function create_feature(lng, lat, properties={}){
  return {
    type: 'Feature',
    properties: properties,
    geometry: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }
}

// for making our skulls
function point_layer_obj(){
  return {
    id: 'point',
    type: 'symbol',
    source: 'data',
    "paint":{"icon-opacity": .65,},
    "layout": {
      "icon-image": "skull_d2_image",
      "icon-allow-overlap": true,
      "icon-size": {
        stops:[ [8, 0.1], [9, 0.2], [10, 0.3], [11, 0.4],[12, 0.5], [14, 1]],
      }
    },
  }
}

function toner_layer_style(){
  let s = {
        "version": 8,
        "sources": {
            "simple-tiles": {
                "type": "raster",
                // point to our third-party tiles. Note that some examples
                // show a "url" property. This only applies to tilesets with
                // corresponding TileJSON (such as mapbox tiles).
                "tiles": [
                    // "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    // "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
                    // "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
                    // "//tile.stamen.com/toner-lite/{z}/{x}/{y}.png",
                    "//stamen-tiles-b.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"
                ],
                "tileSize": 256
            }
        },
        "layers": [{
            "id": "simple-tiles",
            "type": "raster",
            "source": "simple-tiles",
            "minzoom": 0,
            "maxzoom": 22,
            "paint": {"raster-opacity": 0.5},

        }]
    }
  return s
} // end add tonerlayer


// console.log(nyc_simpler)
function make_border_layer(){
  let s = {
    'id': 'nyc',
    'type': 'line', // 'fill'
    'source': {type: 'geojson', data:nyc_simpler},
    "layout": {
      "line-join": "round",
      "line-cap": "round"
    },
    "paint": {
      "line-color": "#088",
      "line-width": 1,
      // "line-offset": -25
    }
  }
  return s
}




// // same as above layer creation , just need a different one for hover/click
// let hover_layer = point_layer_obj()
// hover_layer['paint']['circle-color']= 'rgba(100, 180, 200, 0.9)'
// hover_layer['id'] =  'point-hover'
// hover_layer['filter'] =  ["==", 'full_place', "NONE"]
// map.addLayer(hover_layer)

// function setup_popups(map){
//   var popup = new mapboxgl.Popup({closeButton: false,  closeOnClick: false })
//   map.on('mousedown', function(e) {
//     if (!e.point){return}
//     // console.log(e.lngLat)
//     var features = map.queryRenderedFeatures(e.point, { layers: ['point'] });
//     if (!features.length) {
//         popup.remove();
//         return;
//     }
//     // XXX
//     // this is a hack because queryRenderedFeatures returns too many results when data driven circle radius
//     // see https://github.com/mapbox/mapbox-gl-js/issues/3604
//     // not performant enough for on mousemove, had to add lat lng because of this
//     features.sort( (a, b)=>{
//       return getDistance(e.lngLat, {lat:a.properties.lat, lng:a.properties.lng})-getDistance(e.lngLat, {lat:b.properties.lat, lng:b.properties.lng})
//     })
//     // just take the first one, i.e. closest to click
//     var feature = features[0];
//     // unless it's already selected, then pick the next closest
//     if (feature.properties.full_place == map.getFilter('point-hover')[2] && features.length > 1)
//     {
//       feature = features[1]
//     }
//     map.setFilter('point-hover', ["==", 'full_place', feature.properties.full_place])
//     // Populate the popup and set its coordinates
//     // based on the feature found.
//     let props = feature.properties
//     let min = props.estimate_low ? `Low Estimate: ${props.estimate_low.toLocaleString()}<br/>` : ''
//     let source = props.source && props.source.indexOf('http:') ==0 ? `<a href="${props.source}">Source</a><br/>`:''
//     popup.setLngLat(feature.geometry.coordinates)
//         .setHTML(`<strong>${props.place}</strong><br/>High Estimate: ${props.estimate_high.toLocaleString()}<br/>${min}${source}`
//         ).addTo(map);
//     }) // end on mousedown
// }
