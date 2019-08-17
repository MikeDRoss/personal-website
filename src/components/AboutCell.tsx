import React from 'react';
import { AboutCellDataType } from '../data/AboutCellData'
import { Link } from 'react-router-dom';

const AboutCell = ( {aboutCellData } : {aboutCellData: AboutCellDataType}) => (
  
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{aboutCellData.title}</h3>
      </header>
      <Link to={aboutCellData.link} className="image"><img src={process.env.PUBLIC_URL + aboutCellData.image} alt="" /></Link>
      <div className="description">
        <p>{aboutCellData.subtitle}</p>
      </div>
    </article>
  </div>
);

export default AboutCell;
