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
    description={"Jacob Keller's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my site</Link></h2>
          <p>
            Projects, Research, and Blog Posts
          </p>
        </div>
      </header>
      <p> Welcome! This site showcases a semi-complete
        and ever-expanding portfolio of my personal and professional
        interests. I am interested and excited
        to improve it&apos;s
        content and interactivity as I continue to learn
        JavaScript and React.js.
        For now, you can read more <Link to="/about">about me</Link>
        , check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
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
