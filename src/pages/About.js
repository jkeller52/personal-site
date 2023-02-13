import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import remarkGfm from 'remark-gfm';

// import ReactDom from 'react-dom';
import Main from '../layouts/Main';
// import _mytable from '../static/css/components/_mytable.scss';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Added this as test for ReactMarkdown and remarkGfm package to generate tables in markdown
// ReactDom.render(
//   <ReactMarkdown remarkPlugins={[remarkGfm]} />,
//   document.body,
// );

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const markdownTable = `
| Title                                   | Year          | Association                                                     |
| --------------------------------------- | ------------- | --------------------------------------------------------------- | 
| MS, Industrial and Systems Engineering  | exp. May 2023 | Ohio State University                                           |
| Graduate Research Associate             | 2021-Present  | [Cognitive Systems Engineering Laboratory](https://csel.osu.edu)| 
|  Undergraduate Research Assistant       | 2018-2020     | [Cognitive Systems Engineering Laboratory](https://csel.osu.edu)|
|  BS in Human Systems Integration        | 2020          | Ohio State University                                           |`;

const About = () => (
  <Main
    title="About"
    description="About me"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        // remarkPlugins={[remarkGfm]}
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        source={[markdownTable]}
        renderers={{
          Link: LinkRenderer,
        }}
      />
    </article>
  </Main>
);

export default About;
