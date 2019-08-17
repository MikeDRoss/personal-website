import React from 'react';
import { AboutCellDataType } from '../data/AboutCellData'

const AboutCell = ( {aboutCellData } : {aboutCellData: AboutCellDataType}) => (
  
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{aboutCellData.title}</h3>
      </header>
      <a href={process.env.PUBLIC_URL} className="image"><img src={process.env.PUBLIC_URL + aboutCellData.image} alt="" /></a>
      <div className="description">
        <p>{aboutCellData.subtitle}</p>
      </div>
    </article>
  </div>
);

export default AboutCell;
