const rootFolder = {
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

function calculateFilesInFolder(root) {
    let files = 0;

    if (root.files) {
        files += root.files.length;
    }

    if (root.folders) {
        for (const folder of root.folders) {
            files += calculateFilesInFolder(folder);
        }
    }

    return files;
}

console.log(calculateFilesInFolder(rootFolder));
