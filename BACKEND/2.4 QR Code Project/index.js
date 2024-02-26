/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';                // 3
import inquirer from 'inquirer';    // 1
import qr from 'qr-image';          // 2


inquirer
.prompt([
    {
    message: 'Type in your URL: ',
    name: 'URL',
    },
])  
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));  // 2

    fs.writeFile('URL.txt', url, (err) => {  // 3
    if (err) throw err;
    console.log('The file has been saved!');
    }
    );

})

.catch((error) => {
    if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
    } else {
    // Something else went wrong
    }
});