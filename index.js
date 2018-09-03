#!/usr/bin/env node

const fs = require("fs");
const readmeMd = './README.md';
const path = require('path');

/* const getLinks = (err, lines) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(lines);

    }
}; */

/* const getLines = (err, md) => {
    if (err) {
        console.log(err.message);
    } else {
        const lines = md.split('\n');
        // console.log(lines);
       //getLinks(err, lines);
    };
};*/
const getLinks = (err, md) => {
    if (err) {
        console.log(err.message);
    } else {
        const search = /((\bhttps?:\/\/)|(\bhttp:\/\/)|(\bwww\.))\S*/g;
        const links = md.match(search);
        for (let i = 0; i < links.length; i++) {
            const cutLink = links[i].split(')');
            const result = cutLink[0];
            console.log(result);
        }
    }
};

const getLines = (err, md) => {
    if (err) {
        console.log(err.message);
    } else {
        const lines = md.split('\n').length;
        console.log(lines);
        //getLinks(err, lines);
    };
};

const readDocument = (readmeMd, getLines, getLinks) => {
    fs.readFile(readmeMd, 'utf-8', getFile = (err, md) => {
        if (err) {
            console.log(err.message);
        } else {
            getLines(err, md);
            getLinks(err, md);
        };
    });
};
readDocument(readmeMd, getLines, getLinks);

module.exports = {readDocument};