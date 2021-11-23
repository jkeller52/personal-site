import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../pages/Index.md');
import ReactMarkdown from 'react-markdown';
const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const Index = () => (
  <Main
    description={"Jacob Keller's personal website. Graduate Research Associate and MS Candidate at Ohio State University"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my site</Link></h2>
          <p>
            This is my personal and professional page with info about what I am up to
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>.
        You can also check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Index;
