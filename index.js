const fs = require("fs");
const readmeMd = './README.md';
const fetch = require('node-fetch');
// const path = require('path');

// const pruebaPath = (doc) => {

// };
/* const getLines = (err, md) => {
    if (err) {
        console.log(err.message);
    } else {
        const lines = md.split('\n');
        // console.log(lines);
       //getLinks(err, lines);
    };
};*/
const printResults = (res) => {

    const allResponse = {
        page: res.url,
        pageStatus: res.status,
        pageMessage: res.statusText
    };
    console.log(allResponse);
};
const getResponse = (result) => {
    // console.log(result);
    fetch(result).then((res) => {
        // console.log(res);
        printResults(res);
    });
};
const getLinks = (err, str) => {
    if (err) {
        console.log(err.message);
    } else {
        const search = /((\bhttps?:\/\/)|(\bhttp:\/\/)|(\bwww\.))\S*/g;
        const links = str.match(search);
        for (let i = 0; i < links.length; i++) {
            const cutLink = links[i].split(')');
            const result = cutLink[0];
            // console.log(result);
            getResponse(result);
        }
    }
};

const getLines = (err, str) => {
    if (err) {
        console.log(err.message);
    } else {
        const lines = str.split('\n').length;
        // console.log(lines);
        //getLinks(err, lines);
    };
};

const readDocument = (readmeMd, getLines, getLinks) => {
    fs.readFile(readmeMd, 'utf-8', getFile = (err, str) => {
        if (err) {
            console.log(err.message);
        } else {
            getLines(err, str);
            getLinks(err, str);
        };
    });
};
readDocument(readmeMd, getLines, getLinks);

module.exports = {readDocument};