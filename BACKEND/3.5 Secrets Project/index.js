//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dirname } from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'));

// function passwordCheck(req, res, next) {
//   if (req.body.password === 'ILoveProgramming') {
//     userIsAuthorised = true;
//   } 
//   next();
// }
// app.use(passwordCheck);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  if (req.body.password === 'ILoveProgramming') {
    res.sendFile(__dirname + '/public/secret.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
    // res.send('You have entered the wrong password');
  }
});

app.listen(3000, () => {
  console.log(`Server is listening on port ${port}`);
});

