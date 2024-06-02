import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jacob Keller's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          {/* <p>
            Research, Projects
          </p> */}
        </div>
      </header>
      <p> Welcome! This site showcases a semi-complete
        and ever-expanding portfolio of my personal and professional
        interests.
        You can read more <Link to="/about">about me</Link>,
        {' '} see <Link to="/stats">site statistics</Link>
        {' '}, check out my
        <Link to="/projects"> projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
