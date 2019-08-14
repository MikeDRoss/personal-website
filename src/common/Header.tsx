import { Link } from 'react-router-dom';
import React from 'react';
import headers from '../data/HeaderData';


class Header extends React.Component {
  render() {  
    return (
      <header id="header">
        <h1 className="index-link">
          <Link to="">Michael Ross</Link>
        </h1>
      <nav className="links">
        <ul>
        {headers.map(h => (
          <li key={h.text}>
            <Link to={h.url}>{h.text}</Link>
          </li>
        ))}
        </ul>
      </nav>
    </header>
      );
    }
  }

export default Header;
