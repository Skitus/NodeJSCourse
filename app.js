const fs = require('fs');
const readHuman = require('./human.json');

const human = {
    name: 'Arthur',
    age: 18,
    mainLanguage: 'JS',
    salary: 400
};

const createJsonFile = () => {
    fs.writeFile('./human.json', JSON.stringify(human), (err) => {
        if (!err) {
            console.log('file was created');
        } else {
            console.log('file error', err);
        }
    })
}

createJsonFile();


console.log('human', readHuman);