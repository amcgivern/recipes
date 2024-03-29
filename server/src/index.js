"use strict"

const express = require("express");
const cors =    require("cors");
const fs = require("fs");
const {PrismaClient} = require('@prisma/client')

const app = express();
app.use(cors());
app.use(express.json());
let clicks_counter = 0;
const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env["DATABASE_URL"],
      },
    },
  })

const recipesPath = "data/recipes.json";

let rawdata = fs.readFileSync(recipesPath);
let recipes = JSON.parse(rawdata);

app.get("/clicks", (req, res) => {
  clicks_counter += 1;
  return res.json({
    num_clicks: clicks_counter,
  });
});

app.get("/recipes", (req, res) => {
  return res.json(recipes);
});

app.get("/recipes/:recipeId", (req, res) => {
  return res.json(recipes.recipes[req.params.recipeId]);
});

app.get('/yolo', async (req, res) => {
    const posts = await prisma.Author.findMany({
      where: { firstName: 'amanda' },
    })
    console.log("result", posts)
    res.json(posts);
  })
  
app.post("/recipe", (req, res) => {
  console.log("new recipe", recipes);
  recipes.recipes.push(req.body);
  const recipesJSON = JSON.stringify(recipes);
  console.log(recipesJSON);

  fs.writeFile(recipesPath, recipesJSON, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
});
app.listen(3001, () => console.log("Hello World"));
