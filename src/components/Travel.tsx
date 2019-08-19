import React from 'react';
import Main from '../layouts/Main'
import Helmet from 'react-helmet'
import Map from './Map'

const Travel:React.FC = () => (

<Main>
    <Helmet title="Travel" />
    <article className="post" id="about-sections">
        <header>
            <div className="title">
            <h2>Travel Map</h2>
            <p>This is an interactive map of the countries I have visited, or hope to visit in the future!</p>
            <p>Try clicking on one of the countries ive visited!</p>
            </div>
        </header>
    </article>
    <Map />
</Main>
);

export default Travel;

