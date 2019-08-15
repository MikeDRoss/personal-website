import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu';

import routes from '../data/HeaderData';

const Hamburger:React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Menu.slide right isOpen={open}>
        <ul className="hamburger-ul">
          {routes.map(h => (
            <li key={h.text}>
              <Link to={h.url} onClick={() => setOpen(!open)}>
                <h3 className='index-li'>{h.text}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Menu.slide>
    </div>
  );
};

export default Hamburger;