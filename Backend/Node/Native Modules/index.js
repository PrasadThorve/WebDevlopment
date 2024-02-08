const fs = require("fs");
const { isErrored } = require("stream");

// fs.writeFile("message.txt","Hello Node, I am prasad!",(err) => {
//     if(err) throw err;
//     console.log('The file has been saved!');
// });

fs.readFile("./message.txt",'utf-8', (err,data)=>{
    if(err) throw err;
    console.log(data);
});

// readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

fs.readFile