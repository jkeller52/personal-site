import React from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { Link } from 'react-router-dom';
import { createComponent, Provider } from 'react-fela';
import { bounce } from 'react-animations';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

//add new code and imports

const mapStylesToProps = ({ background, height, width }, renderer) => ({
	animationName: renderer.renderKeyframe(() => bounce, {}),
	animationDuration: '2s',
	background,
	height,
	width,
});

const BouncingDiv = createComponent(mapStylesToProps, 'div');

render(
	<Provider renderer={createRenderer()}>
		<BouncingDiv background="red" height="100px" width="100px" />
	</Provider>,
	document.getElementById('root'),
);


// end new code


// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Jacob Keller"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
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

export default About;
