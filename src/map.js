import React from 'react';
import * as mapboxgl from 'mapbox-gl';

//Test key
 //const pubTok = 'pk.eyJ1IjoidGF5bWFub3R0IiwiYSI6ImNrZGRhZDk5MjF4azcyeWx2MW5nejM3eG8ifQ.LFKvbQSDAD2Dw5tDuKNulg'

//Build key
const pubTok = 'pk.eyJ1IjoidGF5bWFub3R0IiwiYSI6ImNrZHMwMjlnaTB2MDMyeHBiaGNhcHoxaWoifQ.w_GnggMDeyTSt2iskLx3QA';
 class Map extends React.Component {
    constructor(){
        super()
        this.mapRef = React.createRef()
    }
    componentDidMount(){
        mapboxgl.accessToken = pubTok;

        const map = new mapboxgl.Map({
            container: this.mapRef.current,
            style:'mapbox://styles/taymanott/ckdjd4pl102b51jndlykxc4ve',
            center:[-89.376,43.082],
            zoom:11.36
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
                coordinates: [-89.404081, 43.5650409]
            },
        
            properties: {
                title: 'Memorial High',
                description: 'Ledges and some bleachers'
        }}] 
        };
        
        var shops = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type:'point',
                    coordinates: [-89.3926613, 43.0752002]
                },

                properties: {
                    title: 'Freedom Skate Shop',
                    description: 'Skate Shop'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type:'point',
                    coordinates: [-89.3666902, 43.0841213]
                },

                properties: {
                    title: 'Alumni Board Shop',
                    description: 'Skate Shop'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type:'point',
                coordinates: [-89.2963648, 43.130259]
            },

            properties: {
                title: 'Focus Board Shop',
                description: 'Skate Shop'
        }}] 
        };

      geojson.features.forEach(function(marker){
          var el = document.createElement('div');
          el.className = 'marker';
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset:25})
          .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
          .addTo(map);
      }) ;
      shops.features.forEach(function(marker){
        var el = document.createElement('div');
        el.className = 'shop';
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset:25})
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
    }) ;
    map.addControl(new
        mapboxgl.NavigationControl());
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