import React from 'react';
import ReactMapGL from 'react-map-gl';
import Legend from './Legend'
import {json} from 'd3-request';
import {defaultMapStyle, generateMapStyle} from '../data/MapData'
// Without this import, the console displays a 'missing CSS declaration' warning
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

const initialState = {
    mapStyle: defaultMapStyle,
    mapData: null,
    viewport: {
        height:600,
        width:'100%',
        latitude: 30,
        longitude: 0,
        zoom: 1.2
    }
};


type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<{}, State> {
    public state: State = initialState;

    public setMapLayers = () => {
        json(process.env.PUBLIC_URL + '/map-data.geojson', (error, mapData : any) => {
            if(!error) {
                this.setState({mapStyle:generateMapStyle(mapData), mapData});
            }
        });
    }

    public render() {
        const { viewport, mapStyle } = this.state;
        return (
            <ReactMapGL
                {...viewport}
                mapStyle={mapStyle}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onLoad={() => this.setMapLayers()}
                onViewportChange={(viewport:any )=> this.setState({ viewport })}
            >
            <Legend />
            </ReactMapGL>
        );
    }
};