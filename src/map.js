import React from 'react';
import * as mapboxgl from 'mapbox-gl';

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

        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type:'point',
                    coordinates: [-89.4988443, 43.0563123]
                },
        
                properties: {
                    title: 'Big Bank',
                    description: 'a big bank/wall'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type:'point',
                    coordinates: [-89.5004081, 43.0650409]
                },
        
                properties: {
                    title: 'Memorial High',
                    description: 'Ledges and some bleachers'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type:'point',
                coordinates: [-89.4003387, 43.0745857]
            },
        
            properties: {
                title: 'Legendary Spot',
                description: 'Ledges'
        }},
        {
            type:'Feature',
            geometry:{
                type:'point',
                coordinates: [-89.3880214,43.070965]
            },
            properties:{
                title:'Lunar Court',
                description: 'Aluminum ledges'
            }
        },
        {
            type:'Feature',
            geometry:{
                type:'point',
                coordinates:[-89.398481,43.0689118]
            },
            properties:{
                title:'Big C',
                description:'Large C ledge'
            }
            
        },
        {
            type: 'Feature',
            geometry:{
                type: 'point',
                coordinates:[-89.3853247,43.0756964]
            },
            properties:{
                title: 'Bulletproof Glass',
                description: 'Manual Pad/Walride'
            }
            
        },
        {
            type: 'Feature',
            geometry:{
                type: 'point',
                coordinates:[-89.3804286,43.0762359]
            },
            properties:{
                title: 'The Best Slappy in town',
                description: 'curb'
            }
            
        },
        {
            type: 'Feature',
            geometry:{
                type: 'point',
                coordinates:[-89.3804286,43.0762359]
            },
            properties:{
                title: 'The Garden',
                description: 'climb the hill and find out'
            }
            
        },
        {
            type: 'Feature',
            geometry:{
                type: 'point',
                coordinates:[-89.3804286,43.0762359]
            },
            properties:{
                title: 'The Garden',
                description: 'climb the hill and find out'
            }
            
        },  
    ] 
        };
        
       
    var parks = { type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type:'point',
            coordinates: [-89.3663263, 43.0845479]
        },

        properties: {
            title: 'Goodman Skatepark',
            description: 'the newest and largest'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type:'point',
            coordinates: [-89.3435772, 43.0975515]
        },

        properties: {
            title: 'GOODMAN IRONWORKS',
            description: 'only the real ones ride this park'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type:'point',
            coordinates: [-89.4988443, 43.0563123]
        },

        properties: {
            title: '',
            description: 'the newest and largest'
        }
    },
]
}    
    
      geojson.features.forEach(function(marker){
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
           
            <div style ={{width: "100%", height:'90vh',
             border:'2px solid #113611'}} ref ={this.mapRef}>

            </div>
           
        )
    }
}





export default Map;