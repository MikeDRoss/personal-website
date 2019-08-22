import React from 'react';
import ReactMapGL from 'react-map-gl';
import Legend from './Legend'
import {json} from 'd3-request';
import {defaultMapStyle, generateMapStyle} from '../data/MapData'
import countryImageMap from '../data/CountryImageData'
// Without this import, the console displays a 'missing CSS declaration' warning
import 'mapbox-gl/dist/mapbox-gl.css'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ImageGallery from 'react-image-gallery';


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

const initialState = {
    modal: false,
    mapStyle: defaultMapStyle,
    mapData: null,
    hoveredFeature: null,
    clickedFeature: null,
    x: 0,
    y: 0,
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

    public onClick = (event:any) => {
        const {
            features
        } = event;
        const clickedFeature = features && features.find((f:any) => f.source === 'countryLayer');

        this.setState({clickedFeature});
        if(this.isCountryWithPictures()) {
            this.toggle()
        }
    }

    private isCountryWithPictures = () => {
        return this.state.clickedFeature && countryImageMap[(this.state.clickedFeature as any).properties.id]
    }

    public onHover = (event:any) => {
        const {
            features,
            srcEvent: {offsetX, offsetY}
        } = event;
        const hoveredFeature = features && features.find((f:any) => f.source === 'countryLayer');

        this.setState({hoveredFeature, x: offsetX, y: offsetY});
    };

    public renderTooltip = () => {
        const {hoveredFeature, x, y} = this.state;

        return (
            hoveredFeature && (
            <div className="tooltip" style={{left: x, top: y}}>
                <div>{(hoveredFeature as any).properties.name}</div>
            </div>
            )
        );
    }


    public setMapLayers = () => {
        json(process.env.PUBLIC_URL + '/map-data.geojson', (error, mapData : any) => {
            if(!error) {
                this.setState({mapStyle:generateMapStyle(mapData), mapData});
            }
        });
    }

    public toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    public render() {
        const { viewport, mapStyle, clickedFeature } = this.state;
      
        return (
            <div>
                <ReactMapGL
                    {...viewport}
                    mapStyle={mapStyle}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onLoad={() => this.setMapLayers()}
                    onViewportChange={(viewport:any )=> this.setState({ viewport })}
                    onHover={this.onHover}
                    onClick={this.onClick}
                >
                    {this.renderTooltip()}
                    <Legend />
                </ReactMapGL>

                {/*TODO: This needs to be refactored..*/}
                {this.isCountryWithPictures() && 
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-lg' centered={true} zIndex={1000000} >
                    <ModalHeader toggle={this.toggle}>{countryImageMap[(clickedFeature as any).properties.id].country}</ModalHeader>
                    <ModalBody>
                    <ImageGallery
                        items={countryImageMap[(clickedFeature as any).properties.id].imageData}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                    </ModalBody>
                </Modal>
                }
            </div>
        );
    }
};