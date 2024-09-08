// OpenAIService.js
import axios from 'axios';

const API_KEY = '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';

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const generateMealPlan = async (userInput) => {
    const { calorieGoal, dietaryRestrictions, fitnessGoals } = userInput;
    const prompt = `
        Generate a meal plan with three meals for the day (breakfast, lunch, and dinner). 
        The user has a calorie goal of ${calorieGoal} kcal per day. 
        They follow a ${dietaryRestrictions} diet. Their fitness goal is ${fitnessGoals}.
        Please include the meal names, ingredients, and estimate the nutritional values (calories, protein, carbs, fats).
        Format your response below.

        Breakfast:
        [meal name]
        [calories]
        [protein]
        [carbs]
        [fats]

        Lunch:
        [meal name]
        [calories]
        [protein]
        [carbs]
        [fats]

        Dinner:
        [meal name]
        [calories]
        [protein]
        [carbs]
        [fats]

    `;

    try {
        const response = await openAI.post('/completions', {
            model: 'gpt-3.5-turbo',  // or 'gpt-3.5-turbo' depending on availability
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7, // You might want to include temperature for variability
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error generating text:', error.response ? error.response.data : error.message);
        throw error;
    }
};
