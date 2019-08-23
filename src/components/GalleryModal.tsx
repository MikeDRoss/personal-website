import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import countryImageMap from '../data/CountryImageData'


const GalleryModal = ( {props, toggle } : {props: any, toggle: any}) => (
        
    <Modal isOpen={props.modal} toggle={toggle} className='modal-lg' centered={true} zIndex={1000000} >
        <ModalHeader toggle={toggle}>{countryImageMap[props.countryId].name}</ModalHeader>
        <ModalBody>
        <ImageGallery
            items={countryImageMap[props.countryId].imageData}
            showFullscreenButton={false}
            showPlayButton={false}
        />
        </ModalBody>
    </Modal>
);

export default GalleryModal; 