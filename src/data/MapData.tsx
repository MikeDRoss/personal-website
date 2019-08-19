import MAP_STYLE from '../data/map-style-basic-v8.json';
import {fromJS} from 'immutable';

const fillLayer = fromJS({
    id: 'source',
    source: 'countryLayer',
    type: 'fill',
    interactive: true,
    paint: {
      'fill-color': '#008000',
      'fill-outline-color': '#008000',
      'fill-opacity': 0.3
    }
  });

export const defaultMapStyle = fromJS(MAP_STYLE);

export const generateMapStyle = (data: any) => defaultMapStyle
    .setIn(['sources', 'countryLayer'], fromJS({
    type: 'geojson',
    data
    }))
    .set('layers', defaultMapStyle.get('layers').push(fillLayer));



    