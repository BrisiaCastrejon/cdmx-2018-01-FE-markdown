const fs = require("fs");
const readmeMd = './README.md';
const fetch = require('node-fetch');
const colors = require('colors');
// const path = require('path');
// const pruebaRuta = ('C:/Users/TurnoAM/Documents/Laboratoria/Libreria/cdmx-2018-01-FE-markdown/test/md-links.spec.js')

/* const getLines = (err, md) => {
    if (err) {
        console.log(err.message);
    } else {
        const lines = md.split('\n');
        // console.log(lines);
       //getLinks(err, lines);
    };
};*/

// const resolveRoute = (file) => {
//     if (path.isAbsolute(file) === true) {
//         console.log(file);
//     } else {
//         console.log(path.resolve(file) + 'este es el path arreglado');    
//     };
// };
// resolveRoute(readmeMd);

const printResults = (res) => {

    const allResponse = {
        page: res.url,
        pageStatus: res.status,
        pageMessage: res.statusText
    };
     console.log("LinkCheck:".cyan +' '+ allResponse.page +' '+ "Status:".yellow +' '+ allResponse.pageStatus + ' ' + "networkMessage:".magenta +' '+ allResponse.pageMessage);
};
const getResponse = (result) => {
    // console.log(result);
    fetch(result).then((res) => {
        // console.log(res);
        printResults(res);
    });
};

const getLinks = (err, str) => {
  return  new Promise((resolve, reject)=>{
        if (err) return reject('No se obtuvieron los links');
        const search = /((\bhttps?:\/\/)|(\bhttp:\/\/)|(\bwww\.))\S*/g;
        const links = str.match(search);
        for (let i = 0; i < links.length; i++) {
            const cutLink = links[i].split(')');
            const result = cutLink[0];
            // console.log(result);
            return resolve(result);           
        };
    });
};


const mdLinks = (readmeMd) => {
  return new Promise((resolve, reject)=>{
        fs.readFile(readmeMd, 'utf-8', getFile = (err, str) => {
            if (err) return reject('Algo salio mal :( ');
            // console.log(str);
            return resolve(str);          
        });
    });  
};
mdLinks(readmeMd)
.then(function (response) {
    console.log(response);
   // return valorLinks;
// }).then((valorLinks)=>{
//     console.log(valorLinks)
 })

module.exports = {mdLinks};

//new Promise((resolve, reject)=>{})