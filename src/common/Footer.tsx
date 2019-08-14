import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePic from '../static/img/Profile_Pic.png'
import icons from '../data/IconData'

const Footer = () => (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={ProfilePic} alt="" />
        </Link>
        <header>
          <h2>Michael Ross</h2>
          <p><a href="mailto:michael4725@gmail.com">michael4725@gmail.com</a></p>
        </header>
      </section>
  
      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Michael. I&apos;m a Senior Software Engineer at Capital One with extensive experience building scalable backend systems on the public cloud, provisioning the infrastructure these systems run on, and everything in between.
        </p>
        <ul className="actions">
          <li>
            <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>
          </li>
        </ul>
      </section>
  
      <section id="footer">
        <ul className="icons">
          {icons.map(i => (
            <li key={i.label}><a href={i.link}><FontAwesomeIcon icon={i.icon} /></a></li>
          ))}
        </ul>
        <p className="copyright">&copy; Michael Ross <Link to="/">mikedross.github.io</Link></p>
      </section>
    </section>
  );
  
  export default Footer;