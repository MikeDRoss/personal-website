import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const CountryImageGallery = ( {galleryData } : {galleryData: any}) => (
        <article className="post" id="about-sections">
            <div className="title">
                <header>
                    <h2>{galleryData.country}</h2>
                </header>
            </div>
            <div className="cell-container">
                <article className="mini-post">
                    <ImageGallery items={galleryData.imageData} />
                </article>
            </div>
        </article>
);

export default CountryImageGallery;