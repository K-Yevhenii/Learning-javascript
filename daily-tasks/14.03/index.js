// TODO:
// Find average complexity of all topics
// Find the most complex topic and print it's name
// Sort topics by name
export const topics = [
    { id: 1, name: 'JavaScript', complexity: 2 },
    { id: 2, name: 'React', complexity: 3 },
    { id: 3, name: 'Node', complexity: 4 },
    { id: 4, name: 'MongoDB', complexity: 1 },
    { id: 5, name: 'Express', complexity: 3 },
    { id: 6, name: 'Redux', complexity: 3 },
    { id: 7, name: 'TypeScript', complexity: 1 },
];

const averageComplexity =
    topics.reduce(
        (acc, { complexity }) => acc + complexity,

        0,
    ) / topics.length;

let mostComplex;

for (const topic of topics) {
    const { complexity } = topic;

    if (!mostComplex || complexity > mostComplex.complexity) {
        mostComplex = topic;
    }
}

topics.sort((a, b) => a.name.localeCompare(b.name));

const app = {
    folders: [
        {
            name: 'src',
            folders: [
                {
                    name: 'components',
                    folders: [
                        {
                            name: 'Header',
                            files: ['Header.js', 'index.js'],
                        },
                        {
                            name: 'Footer',
                            files: ['Footer.js', 'index.js'],
                        },
                        {
                            name: 'Main',
                            files: ['Main.js', 'index.js'],
                        },
                    ],
                },
                {
                    name: 'pages',
                    folders: [
                        {
                            name: 'Home',
                            files: ['Home.js', 'index.js'],
                        },
                        {
                            name: 'About',
                            files: ['About.js', 'index.js'],
                        },
                    ],
                },
                {
                    name: 'utils',
                    files: ['api.js', 'helpers.js'],
                },
            ],
        },
        {
            name: 'tests',
            files: ['Header.test.js', 'Footer.test.js', 'Main.test.js'],
        },
    ],
    files: ['index.js', 'eslintrc.js', 'package.json'],
};
