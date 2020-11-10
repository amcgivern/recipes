import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
let clicks_counter = 0;
let recipes = {
    recipes: [
        {
            "id":1,
            "@context": "https://schema.org",
            "@type": "Recipe",
            "author": "Jake  Smith",
            "cookTime": "PT2H",
            "datePublished": "2015-05-18",
            "description": "Your recipe description goes here",
            "image": "http://www.example.com/images.jpg",
            "recipeIngredient": [
              "ingredient 1",
              "ingredient 2",
              "ingredient 3",
              "ingredient 4",
              "ingredient 5"
            ],
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": "http://schema.org/Comment",
              "userInteractionCount": "5"
            },
            "name": "Rand's Cookies",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "1200 calories",
              "carbohydrateContent": "12 carbs",
              "proteinContent": "9 grams of protein",
              "fatContent": "9 grams fat"
            },
            "prepTime": "PT15M",
            "recipeInstructions": "This is the long part, etc.",
            "recipeYield": "12 cookies"
          },
          {
            "id": 2,
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
            "name": "Grandma's Holiday Apple Pie",
            "image": {
              "@type": "ImageObject",
              "url": "http://cdn.ampproject.org/leader.jpg",
              "height": 200,
              "width": 200
            },
            "author": {
              "@type":"Person",
              "name":"Carol Smith"
            },
            "datePublished": "2009-11-05",
            "description": "This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.0",
              "reviewCount": "35"
            },
            "prepTime": "PT30M",
            "cookTime": "PT1H",
            "totalTime": "PT1H30M",
            "recipeYield": "1 9\" pie (8 servings)",
            "nutrition": {
              "@type": "NutritionInformation",
              "servingSize": "1 medium slice",
              "calories": "250 cal",
              "fatContent": "12 g"
            },
            "ingredients": [
              "apples",
              "White sugar"
            ],
            "recipeInstructions": "1. Cut and peel apples\n 2. Mix sugar and cinnamon. Use additional sugar for tart apples.\n...",
            "publisher": {
              "@type": "Organization",
              "name": "Google",
              "logo": {
                "@type": "ImageObject",
                "url": "http://cdn.ampproject.org/logo.jpg",
                "width": 600,
                "height": 60
              }
            }
          },
          {
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": "Party Coffee Cake",
            "image": [
              "https://example.com/photos/1x1/photo.jpg",
              "https://example.com/photos/4x3/photo.jpg",
              "https://example.com/photos/16x9/photo.jpg"
            ],
            "author": {
              "@type": "Person",
              "name": "Mary Stone"
            },
            "datePublished": "2018-03-10",
            "description": "This coffee cake is awesome and perfect for parties.",
            "prepTime": "PT20M",
            "cookTime": "PT30M",
            "totalTime": "PT50M",
            "keywords": "cake for a party, coffee",
            "recipeYield": "10",
            "recipeCategory": "Dessert",
            "recipeCuisine": "American",
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "270 calories"
            },
            "recipeIngredient": [
              "2 cups of flour",
              "3/4 cup white sugar",
              "2 teaspoons baking powder",
              "1/2 teaspoon salt",
              "1/2 cup butter",
              "2 eggs",
              "3/4 cup milk"
              ],
            "recipeInstructions": [
              {
                "@type": "HowToStep",
                "name": "Preheat",
                "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
                "url": "https://example.com/party-coffee-cake#step1",
                "image": "https://example.com/photos/party-coffee-cake/step1.jpg"
              },
              {
                "@type": "HowToStep",
                "name": "Mix dry ingredients",
                "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
                "url": "https://example.com/party-coffee-cake#step2",
                "image": "https://example.com/photos/party-coffee-cake/step2.jpg"
              },
              {
                "@type": "HowToStep",
                "name": "Add wet ingredients",
                "text": "Mix in the butter, eggs, and milk.",
                "url": "https://example.com/party-coffee-cake#step3",
                "image": "https://example.com/photos/party-coffee-cake/step3.jpg"
              },
              {
                "@type": "HowToStep",
                "name": "Spread into pan",
                "text": "Spread into the prepared pan.",
                "url": "https://example.com/party-coffee-cake#step4",
                "image": "https://example.com/photos/party-coffee-cake/step4.jpg"
              },
              {
                "@type": "HowToStep",
                "name": "Bake",
                "text": "Bake for 30 to 35 minutes, or until firm.",
                "url": "https://example.com/party-coffee-cake#step5",
                "image": "https://example.com/photos/party-coffee-cake/step5.jpg"
              },
              {
                "@type": "HowToStep",
                "name": "Enjoy",
                "text": "Allow to cool and enjoy.",
                "url": "https://example.com/party-coffee-cake#step6",
                "image": "https://example.com/photos/party-coffee-cake/step6.jpg"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "18"
            },
            "video": {
              "@type": "VideoObject",
              "name": "How to make a Party Coffee Cake",
              "description": "This is how you make a Party Coffee Cake.",
              "thumbnailUrl": [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg"
               ],
              "contentUrl": "http://www.example.com/video123.mp4",
              "embedUrl": "http://www.example.com/videoplayer?video=123",
              "uploadDate": "2018-02-05T08:00:00+08:00",
              "duration": "PT1M33S",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": { "@type": "http://schema.org/WatchAction" },
                "userInteractionCount": 2347
              },
              "expires": "2019-02-05T08:00:00+08:00"
            }
          }
]};

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
