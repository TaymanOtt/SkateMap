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
    }
]
}    
export default parks;