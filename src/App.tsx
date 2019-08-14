import React from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import Main from './layouts/Main'

const App:React.FC = () => (
  
    <Main>
      <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome</Link></h2>
          <p>I used this website as an opportunity to teach myself modern web development. Feel free to look around!</p>
          <p><a href="https://github.com/MikeDRoss/personal-website">source code</a></p>
        </div>
      </header>      
    </article>
    </Main>
  
);

export default App;
