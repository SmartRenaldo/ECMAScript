const fs = require("fs");

function readACharm() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/ACharm.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

function readButStill() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/ButStill.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

function readIShouldHaveKnown() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/IShouldHaveKnown.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

async function main() {
    let aCharm = await readACharm();
    let butStill = await readButStill();
    let iShouldHaveKnown = await readIShouldHaveKnown();

    console.log(aCharm.toString());
    console.log(butStill.toString());
    console.log(iShouldHaveKnown.toString());
}

main();
