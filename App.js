const Express = require('express');
const BodyParser = require('body-parser');
require('dotenv/config');

const ExpressApp = new Express();

ExpressApp.set('view engine', 'ejs');
ExpressApp.use(BodyParser.urlencoded({ extended: false }));
ExpressApp.use(Express.json());



ExpressApp.get('/', (req, res) => {
    // variables
    let num_of_dice, type_of_dice;
    let rand_num_range = 0;

    // containers
    const rand_num_arr = [];    // stores random numbers generated

    // query parameters
    num_of_dice = req.query.num_of_dice;
    type_of_dice = req.query.type_of_dice;

    // initial operations
    // calculating the range of random numbers according to the
    // die selected
    if (type_of_dice === 'd4') {
        rand_num_range = 4;
    }
    if (type_of_dice === 'd6') {
        rand_num_range = 6;
    }
    if (type_of_dice === 'd8') {
        rand_num_range = 8;
    }
    if (type_of_dice === 'd10') {
        rand_num_range = 10;
    }
    if (type_of_dice === 'd12') {
        rand_num_range = 12;
    }
    if (type_of_dice === 'None') {
        res.status(400);
    }

    // main logic
    // generating random numbers and storing them in the rand_num_arr array
    for (let i = 1; i <= num_of_dice; ++i) {
        rand_num_arr.push(Math.floor(Math.random() * rand_num_range + 1));
    }

    res.render('index', {
        num_of_dice: num_of_dice,
        type_of_dice: type_of_dice,
        rand_num_arr: rand_num_arr
    });
});

const PORT = process.env.PORT || 3338;
ExpressApp.listen(PORT);