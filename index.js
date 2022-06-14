const inquirer = require('inquirer');
const utils = require('./utils/pageGenerator');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell me about yourself.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your linkedin?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'rawlist',
        message: 'What license was this created with?',
        name: 'license',
        choices: ["MPL", "GPL", "APACHE", "MIT", "CC", "BSD",]
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.genreatePage(answers);
})