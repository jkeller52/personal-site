import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';



// uses babel to load contents of file
const markdown = raw('../data/pages/projects.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;


// const Projects = () => (
//   <Main
//     title="Projects"
//     description="Learn about Jacob's projects."
//   >
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

export default Projects;
