const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 3000;

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json());
app.use(express.json());

app.get('/', async (req: any, res: any) => {
    try {
        const url = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=eb494b8c1fdf26232c7b619f7e90cfd5&lang=vi';
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        if (data) {
            res.render("weather", { data: data })
        } else {
            res.end('<h1>Error<h1>')
        }
    } catch (err) {
        res.end('<h1>Error<h1>')
    }
})

app.listen(PORT, () => {
    console.log("App running with port: " + PORT)
})