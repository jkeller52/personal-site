// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?
// to do: delete this section, link to LaTex Resume
const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Languages', 'Decision Support'],
  },
  {
    title: 'Cognitive Work Analysis',
    competency: 4,
    category: ['Cognitive Systems Engineering', 'Ethnography'],
  },
  {
    title: 'Hierarchical Task Analysis',
    competency: 3,
    category: ['Ethnography', 'Cognitive Systems Engineering'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'LaTeX',
    competency: 3,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Markdown',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Work Models that Compute',
    competency: 2,
    category: ['Cognitive Systems Engineering', 'Tools'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'p5.js',
    competency: 2,
    category: ['Tools', 'Data Science', 'Javascript'],
  },
  {
    title: 'Soldering',
    competency: 3,
    category: ['Tools', 'Other Skills', 'Electronics'],
  },
  {
    title: 'Saxophone',
    competency: 4,
    category: ['Other Skills'],
  },
  {
    title: '3D Printing',
    competency: 4,
    category: ['Tools', 'Other Skills'],
  },
  {
    title: 'SCUBA Diving',
    competency: 1,
    category: ['Other Skills'],
  },
  {
    title: 'Indoor Rock Climbing',
    competency: 3.5,
    category: ['Other Skills'],
  },
  {
    title: 'Interdependence Analysis',
    competency: 2,
    category: ['Cognitive Systems Engineering'],
  },
  {
    title: 'Adobe Premiere',
    competency: 4,
    category: ['Other Skills'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 4,
    category: ['Decision Support', 'Other Skills'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 4,
    category: ['Decision Support', 'Other Skills'],
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
