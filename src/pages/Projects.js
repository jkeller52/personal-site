import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

// uses babel to load contents of file
const markdown = raw('../pages/projects.md');

// const mdtable = require('./projects_table1.md');

// used {count} to write wordcount in header
// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Projects = () => (
  <Main
    title="What I Do"
    description="Learn about Jacob's projects and interests"
  >
    <article className="post markdown" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Projects">What I Do </Link></h2>
          <p> projects and interests </p>
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

export default Projects;

//
// Legacy Code:
// const Projects = () => (
//   <Main
//     title="Projects"
//     description="Learn about Jacob's projects."
// >
//     <article className="post" id="projects">
//       <header>
//         <div className="title">
//           <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
//           <p>A selection of my projects</p>
//         </div>
//       </header>
//       {data.map((project) => (
//         <Cell
//           data={project}
//           key={project.title}
//         />
//       ))}
//     </article>
//   </Main>
// );

// export default Projects;
