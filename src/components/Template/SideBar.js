import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/IMG_6845.JPEG`} alt="" />
      </Link>
      <header>
        <h2>Jacob Keller</h2>
        <p><a href="mailto:jacob@jacobkeller.io">jacob@jacobkeller.io</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jacob. I&apos;m a systems engineer who builds software tools
        for expert practitioners working in complex, mission critical work domains.
        Currently, I&apos;m employed as an Exploration Engineer for Jacobs at NASA
        Johnson Space Center, where I contribute to design, deployment,
        and testing of novel software capabilities
        for manned spaceflight extravehicular activites. My hobbies
        include outdoor adventure, IoT projects,
        3D printing, playing saxophone, and astrophotography.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/About" className="button">Learn More</Link>}
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
