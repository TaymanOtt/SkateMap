import  parks  from '../Map/parks.js'
//import spots from './Map/spots.js'

export function addspot(){
    parks.features.push({
        type: 'Feature',
        geometry: {
            type:'point',
            coordinates: [-89.3235772, 43.1975515]
        },

        properties: {
            title: 'New Spot',
            description: 'anewspot'
        }
    })
}