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
      <p>Hi, I&apos;m Jacob. I like building things.
        I am a Graduate Research Associate in the Cognitive Systems Engineering Laboratory<a href="https://csel.engineering.osu.edu"> </a> within the Department of Integrated Systems Engineering at Ohio State. My research interests include human-machine teaming, resilience engineering, and computational modeling.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jacob Keller <Link to="/">jkeller52.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
