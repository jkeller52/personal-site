import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../pages/Index.md');

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description={"Jacob Keller's personal website. Graduate Research Associate at Ohio State University"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Welcome to my website! I have a variety of personal and professional projects listed here
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
