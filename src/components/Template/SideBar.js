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
      <p>Hi, I&apos;m Jacob. I&apos;m a systems engineering graduate student
        who studies human-robot interaction and socio-technical systems.
        I&apos;m interested in the design and evaluation of
        support tools for practitioners making complex decisions in uncertain
        environments, particularly for manned space operation extravehicular acticities.
        My hobbies include web development, IoT projects,
        3D printing, playing saxophone, and
        astrophotography.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">Learn More</Link>}
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
