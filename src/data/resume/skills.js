// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?
// to do: delete this section, link to LaTex Resume
const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Software Languages', 'Design'],
  },
  {
    title: 'Cognitive Work Analysis',
    competency: 4,
    category: ['Knowledge Elicitation', 'Ethnography'],
  },
  {
    title: 'Hierarchical Task Analysis',
    competency: 3,
    category: ['Ethnography', 'Knowledge Elicitation'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Software Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'LaTeX',
    competency: 3,
    category: ['Software Languages', 'Tools'],
  },
  {
    title: 'Markdown',
    competency: 4,
    category: ['Software Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Software Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Software Languages'],
  },
  {
    title: 'Work Models that Compute (WMC)',
    competency: 2,
    category: ['Knowledge Elicitation', 'Tools', 'Computational Modeling/Simulation'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Software Languages'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'p5.js',
    competency: 2,
    category: ['Software Languages', 'Design'],
  },
  {
    title: 'Soldering',
    competency: 3,
    category: ['Miscellaneous'],
  },
  {
    title: 'Saxophone',
    competency: 4,
    category: ['Miscellaneous'],
  },
  {
    title: '3D Printing',
    competency: 3,
    category: ['Miscellaneous', 'Design'],
  },
  {
    title: 'SCUBA Diving',
    competency: 1,
    category: ['Miscellaneous'],
  },
  {
    title: 'Indoor Rock Climbing',
    competency: 3.5,
    category: ['Miscellaneous'],
  },
  {
    title: 'Interdependence Analysis',
    competency: 3,
    category: ['Knowledge Elicitation'],
  },
  {
    title: 'Adobe Premiere',
    competency: 3,
    category: ['Miscellaneous'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 3.25,
    category: ['Design'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 3.5,
    category: ['Design'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
