import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
let clicks_counter = 0;

app.get('/clicks', (req, res) => {
    clicks_counter += 1;
    return res.json({
        num_clicks: clicks_counter,
    })
});


app.listen(3001, () => 
console.log('Hello World'));
