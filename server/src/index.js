import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
let clicks_counter = 0;



let rawdata = fs.readFileSync('data/recipes.json');
let recipes = JSON.parse(rawdata);

app.get('/clicks', (req, res) => {
    clicks_counter += 1;
    return res.json({
        num_clicks: clicks_counter,
    })
});

app.get('/recipes', (req, res) => {
    
    return res.json(recipes);
});

app.get('/recipes/:recipeId', (req, res) => {
    return res.json(recipes.recipes[req.params.recipeId]);
});

app.listen(3001, () => 
console.log('Hello World'));
