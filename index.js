const fs = require("fs");
const readmeMd = './README.md';
const path = require('path');

    fs.readFile(readmeMd, 'utf-8', Callcallback = (err, md)=>{      
        if (err) {
            console.log(err.message); 
        }else {
            const search = /((\bhttps?:\/\/)|(\bhttp:\/\/)|(\bwww\.))\S*/g;
            const links = md.match(search);   
         for (let i = 0; i < links.length; i++) {             
            const cutLink = links[i].split(')');
            // console.log(cutLink);
            const result = cutLink[0];
            // console.log(typeof(result));
            console.log(result);               
         }
        }
    }) 