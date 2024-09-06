import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/User.routes.js';
import axios from 'axios';
import * as cheerio from 'cheerio';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Existing routes
app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.use('/users', userRouter);

// Web scraping route
app.get('/recipe', async (req, res) => {
    
    const { mealName } = req.query;


    if (!mealName) {
        return res.status(400).send("Meal name is required");
    }
    

    try {
        // Replace spaces with '+' for the query
        const query = mealName.trim().replace(/\s+/g, '+');
        const searchUrl = `https://www.allrecipes.com/search?q=${query}`;
        // Fetch search results page
        const searchResponse = await axios.get(searchUrl);
        const $search = cheerio.load(searchResponse.data);
        const $targetDiv = $search('#mntl-card-list-items_1-0');
        if ($targetDiv.length === 0) {
          console.log('No div with the specified id found.');
          return;
        }

        const href = $targetDiv.attr('href');
        if (href) {
            console.log("Extracted href:", href);
        } else {
            console.log('No href attribute found.');
        }
        const recipeDetails = await fetchRecipeDetails(href);

        if (!recipeDetails) {
            console.log('No details found for the recipe.');
            return res.status(404).send("No details found for the recipe");
        }

        console.log("Returning recipe details:", recipeDetails);
        res.send(recipeDetails);
    } catch (error) {
        res.status(500).send("Error scraping data");
        return null;
    }
});

async function fetchRecipeDetails(recipeUrl) {
    try {
      // Fetch the recipe page
      const { data } = await axios.get(recipeUrl);
      const $recipe = cheerio.load(data);
  
      // Extract the desired details
      const details = {
        title: $recipe('h1.article-heading.type--lion').text().trim(),
        image: $recipe('img.primary-image__image').attr('src'),
        calories: $recipe('.mm-recipes-nutrition-facts-summary__table .mm-recipes-nutrition-facts-summary__table-cell.type--dog-bold').eq(0).text().trim(),
        fat: $recipe('.mm-recipes-nutrition-facts-summary__table .mm-recipes-nutrition-facts-summary__table-cell.type--dog-bold').eq(1).text().trim(),
        carbs: $recipe('.mm-recipes-nutrition-facts-summary__table .mm-recipes-nutrition-facts-summary__table-cell.type--dog-bold').eq(2).text().trim(),
        protein: $recipe('.mm-recipes-nutrition-facts-summary__table .mm-recipes-nutrition-facts-summary__table-cell.type--dog-bold').eq(3).text().trim(),
        prepTime: $recipe('.mm-recipes-details__item:contains("Prep Time:") .mm-recipes-details__value').text().trim(),
        servings: $recipe('.mm-recipes-details__item:contains("Servings:") .mm-recipes-details__value').text().trim(),
        ingredients: $recipe('.mm-recipes-structured-ingredients__list-item').map((i, el) => {
            const quantity = $recipe(el).find('span[data-ingredient-quantity]').text().trim();
            const unit = $recipe(el).find('span[data-ingredient-unit]').text().trim();
            const name = $recipe(el).find('span[data-ingredient-name]').text().trim();
            return `${quantity} ${unit} ${name}`.trim();
          }).get().join(', '),      
          directions: $recipe('#mm-recipes-steps__content_1-0 ol li').map((i, el) => {
            return $recipe(el).find('p').text().trim();
          }).get(),
      };
  
      // Log the details
      console.log("Recipe Details:", details);
      return details;
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      return null;
    }
  }

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
  } catch (error) {
    console.log(error);
  }

}

startServer();
