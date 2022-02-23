import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/seattle.png`} alt="" />
      </Link>
      <header>
        <h2>Jacob Keller</h2>
        <p><a href="mailto:keller.974@osu.edu">keller.974@osu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jacob. I&apos;m a graduate engineering student interested in the intersection
        of people, technology, and design.
        I&apos;m interested in developing
        decision-support software for future manned space operations, developing reactive and performant webpages,
        and engineering resilient human-robot team configurations
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jacob Keller <Link to="/">jacobkeller.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
