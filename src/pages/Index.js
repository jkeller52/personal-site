import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

const LinkRenderer = ({ ...children }) => <Link {...children} />;

const markdown = raw('../data/Index.md');

const Index = () => (
  <Main
    description={"Jacob Keller's personal website. Graduate Research Associate and MS Candidate at Ohio State University"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            This website includes professional interests, experiences,
            and hobbies.
          </p>
        </div>
      </header>
      <p> Hi, Im Jacob. Please feel free to read more <Link to="/about">about me</Link>.
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
