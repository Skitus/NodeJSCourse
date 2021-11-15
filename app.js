console.log('hello NodeJS');

const fs = require('fs');

const CODYING = 'utf-8';

const readSystem = () => {
    fs.readdir('loopFolder', (err, data) => {
        if (!err) {
            console.log('success: ', data);
            data.map((file) => {
                console.log('file: ', file);
                fs.readFile(`loopFolder/${file}`, CODYING, (err, data) => {
                    console.log('===========');
                    console.log(' success in file: ', data);
                    console.log(' error in file:  ', err);
                    console.log('===========');
                });
            });
        } else {
            console.log('error:  ', err);
        }
    })

}

const createSystem = (n) => {
    if (fs.existsSync('loopFolder')){
        readSystem();
    } else {
        fs.mkdir('loopFolder', (err) => {
            if (!err) {
                console.log('folder created');
                for (let i = 0; i < n; i++) {
                    fs.writeFile(`loopFolder/text_file_${i}.txt`, `text_${i}`, (err) => {
                        if (!err) {
                            console.log('file was created');
                        } else {
                            console.log('file error');
                        }
                    })
                }
                readSystem();
            } else {
                console.log('folder wasn`t created: ', err);
            }
        })
    }
}
createSystem(5);




