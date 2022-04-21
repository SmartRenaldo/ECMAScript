const fs = require("fs");
const { resolve } = require("path");

const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/ACharm.md', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/ButStill.md', (err, data) => {
            resolve([value, data]);
        });
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/IShouldHaveKnown.md', (err, data) => {
            // resolve([value, data]);
            // another way to concatenate data
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
});
