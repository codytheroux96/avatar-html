const fs = require('fs');

const genreatePage = ({name, location, bio, linkedin, github, license}) => {
    console.log('GENERATING PAGE');
    const template = (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Avatar HTML</title>
            <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        </head>
        
        <body>
            <h1>Avatar HTML</h1>
            <h2>${name}</h2>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown' />
            <h3>${location}</h3>
            <p>${bio}
            </p>
            <a href="#${linkedin}">linkedin</a>
            <a href="#${github}">github</a>
            <h3>${license}</h3>
            <img src="https://img.shields.io/badge/license-${license}-red" alt="badge-${license}" />
        
        </body>
        
        </html>`
    )
    fs.writeFileSync('./output/index.html', template);
    console.log('TEMPLATE GENERATED');
    process.exit();
};

module.exports = {
    genreatePage
};
