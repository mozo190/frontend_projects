import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const dayOfWeek = new Date().getDay();
    let dayType = "a weekday";
    let advice = "it's time to work hard";


    if (dayOfWeek === 0 || dayOfWeek === 6) {
        dayType = "the weekend";
        advice = "it's time to relax and recharge";
    }
 res.send(`<h1>Hey! It's ${dayType}, ${advice}!</h1>`);
} );

// app.post('/', (req, res) => {

//     res.send(`<h1>Hey! It's a weekday, it's time to work hard!</h1>`);
//     console.log(req.body);
// });



// switch (dayOfWeek) {
//     case 0:
//         console.log("It's Sunday! Take some time to relax and recharge.");
//         break;
//     case 1:
//         console.log("It's Monday! Start the week with a positive mindset.");
//         break;
//     case 2:
//         console.log("It's Tuesday! Stay focused and productive.");
//         break;
//     case 3:
//         console.log("It's Wednesday! Keep pushing through the week.");
//         break;
//     case 4:
//         console.log("It's Thursday! Stay motivated, the weekend is almost here.");
//         break;
//     case 5:
//         console.log("It's Friday! Celebrate the end of the workweek.");
//         break;
//     case 6:
//         console.log("It's Saturday! Enjoy your day off and have fun.");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }
app.listen(port, () => {
    console.log(`Server is running at ${port}.`);
});
