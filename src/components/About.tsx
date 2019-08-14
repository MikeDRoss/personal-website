import React from 'react';
import Main from '../layouts/Main'
import Helmet from 'react-helmet'

const About:React.FC = () => (
    <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>About Me</h2>
          <p>For information on my professional background, check out my <a href='https://www.linkedin.com/in/michael-ross-0067a0b5'>LinkedIn</a>.</p>
          <p>Hobbies coming soon...</p>
        </div>
      </header>      
    </article>
  </Main>
);

export default About;
