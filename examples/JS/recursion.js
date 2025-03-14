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
                            files: ['Header.js', 'index.js', 'style.css'],
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
    files: ['index.js', 'eslintrc.js', 'package.json', 'index.html'],
};

function calculateFilesInFolder(root, extension) {
    let files = 0;

    if (root.files) {
        if (extension) {
            const matchingFiles = root.files.filter((file) => file.endsWith(extension));
            files += matchingFiles.length;
        } else {
            files += root.files.length;
        }
    }

    if (root.folders) {
        for (const folder of root.folders) {
            files += calculateFilesInFolder(folder, extension);
        }
    }

    return files;
}

console.log(calculateFilesInFolder(rootFolder));
console.log(calculateFilesInFolder(rootFolder, '.js'));
console.log(calculateFilesInFolder(rootFolder, '.test.js'));
