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
function appFiles(app) {
    let files = 0;
    if (app.files) {
        files += app.files.length;
    }
    if (app.folders) {
        for (const folder of app.folders) {
            files += appFiles(folder);
        }
    }
    return files;
}
console.log(appFiles(app));