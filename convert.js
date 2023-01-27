const fs = require('fs')
const datafile = process.argv[2]

const data = JSON.parse(fs.readFileSync(datafile, 'utf8'))
const features = []

for (const feature of data['features']) {
  features.push({
    type: 'Feature',
    geometry: feature['geometry'],
    properties: {
      title: `${feature['properties']['大字名'] !== null ? feature['properties']['大字名'] : ''}${feature['properties']['地番'] !== null ? feature['properties']['地番'] : ''}`
    }
  })
}

fs.writeFileSync('data.geojson', JSON.stringify({
  type: 'FeatureCollection',
  features: features
}))
