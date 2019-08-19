import React from 'react';
import Main from '../layouts/Main'
import Helmet from 'react-helmet'
import ReactMapGL from 'react-map-gl';
import {json} from 'd3-request';
import {defaultMapStyle, generateMapStyle} from '../data/MapData'
// Without this import, the console displays a 'missing CSS declaration' warning
import 'mapbox-gl/dist/mapbox-gl.css'


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

const initialState = {
    mapStyle: defaultMapStyle,
    mapData: null,
    viewport: {
        height: window.innerHeight,
        width: window.innerWidth,
        latitude: 0,
        longitude: 0,
        zoom: 1
    }
};


type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Travel extends React.Component<{}, State> {
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
            <Main>
            <Helmet title="Travel" />
            <ReactMapGL
                {...viewport}
                mapStyle={mapStyle}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onLoad={() => this.setMapLayers()}
                onViewportChange={(viewport:any )=> this.setState({ viewport })}
            >
            </ReactMapGL>
            </Main>
        );
    }
};