import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const CountryImageGallery = ( {imageData } : {imageData: any}) => (
        <article className="post" id="about-sections">
            <div className="cell-container">
                <article className="mini-post">
                    <ImageGallery items={imageData} />
                </article>
            </div>
        </article>
);

export default CountryImageGallery;