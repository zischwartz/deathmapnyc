import {getDistance} from '../utils.js'

class LegendControl {
    constructor(options) {
        this.options = options
    }
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl';
        this._legend_el = document.createElement('span')
        this._legend_el.className = 'legend'
        this._container.appendChild(this._legend_el)
        this._map.on('move', e=> this._onMove(e) );
        this._onMove() // initial
        return this._container;
    }
    _onMove(e){
      updateLegend(this._map, this._legend_el, this.options);
    }
    getDefaultPosition() {
        return 'bottom-right';
    }
    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map.off('move', this._onMove);
        this._map = undefined;
    }
}


export default LegendControl

function updateLegend(map, el, options) {
  let value = options.value
  let width = options.scale(value, map)
  setLegendScale(el, width, value)
}

function setLegendScale(el, width, value) {
    el.style.textAlign = 'center'
    el.style.display = 'block'
    el.style.borderRadius = '50%'
    el.style.borderWidth = "1px"
    el.style.borderColor = "white"
    el.style.borderStyle = "solid"
    el.style.color = "white"
    el.style.backgroundColor = 'rgba(100, 150, 150, 0.35)'
    el.style.width = `${width}px`;
    el.style.height = `${width}px`;
    el.innerHTML = value.toLocaleString()
}
