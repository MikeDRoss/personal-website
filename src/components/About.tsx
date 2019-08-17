import React from 'react';
import Main from '../layouts/Main'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';
import data from '../data/AboutCellData';
import AboutCell from './AboutCell'

const About:React.FC = () => (
    <Main>
    <Helmet title="About" />
    <article className="post" id="about-sections">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          <p>For information on my professional background, check out my <a href='https://www.linkedin.com/in/michael-ross-0067a0b5'>LinkedIn</a>.</p>
          <p>Here is some info you won't find on my resume!</p>
        </div>
      </header>
      {data.map(info => (
        <AboutCell
          key={info.title}
          aboutCellData={info}
        />
      ))}
    </article>
  </Main>
);

export default About;
