import React from 'react';
import * as mapboxgl from 'mapbox-gl';
import parks from './parks.js'
import spots from './spots.js'
//Public token
 const pubTok = 'pk.eyJ1IjoidGF5bWFub3R0IiwiYSI6ImNrZGRhZDk5MjF4azcyeWx2MW5nejM3eG8ifQ.LFKvbQSDAD2Dw5tDuKNulg'


 class Map extends React.Component {
    constructor(){
        super()
        this.mapRef = React.createRef()
    }
    componentDidMount(){
        mapboxgl.accessToken = pubTok;

        const map = new mapboxgl.Map({
            container: this.mapRef.current,
            style:'mapbox://styles/taymanott/cke3jbav2092j19rxk8oq64zb',
            center:[-89.383,43.074],
            zoom:10.38
        });

       
        
       
    
    
    spots.features.forEach(function(marker){
          var el = document.createElement('div');
          el.className = 'marker';
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset:25})
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
          .addTo(map);
      }) ;
     
    parks.features.forEach(function(marker){
        var el = document.createElement('div');
        el.className = 'parks';
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset:25})
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
    }) ;
    map.addControl(new
        mapboxgl.NavigationControl());
    map.on('load', function(){
        var layers = map.getStyle().layers;
        var labelLayerId;
        for (var i = 0; i< layers.length; i++){
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']){
                labelLayerId = layers[i].id;
                break;
            }
        }
        map.addLayer(
            {
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type' : 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        )
    })
    }
    render(){
        return(
           
            <div style ={{width: "100%", height:'100vh',
             border:'2px solid #113611'}} ref ={this.mapRef}>

            </div>
           
        )
    }
}





export default Map;