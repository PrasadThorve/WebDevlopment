import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';



inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name:"URL",
        message:"Type URL here "
    }
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });