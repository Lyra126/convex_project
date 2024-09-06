import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const MealPrep = ({ route }) => {
  const [recipe, setRecipe] = useState(null);
  const [mealInfo, setMealInfo] = useState([]);
  const [mealName, setMealName] = useState("chicken+roast"); // Assuming the meal name is passed as a parameter

  
  useEffect(() => {
    console.log("Fetching recipe for:", mealName);
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://10.138.111.183:8080/recipe?mealName=${mealName}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchRecipe();
  }, [mealName]);

  const handleButtonPress = () => {
    // Implement the button action, e.g., save the recipe or navigate to another screen
  };

  if (!recipe) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.info}>Calories: {recipe.calories}</Text>
        <Text style={styles.info}>Fat: {recipe.fat}</Text>
        <Text style={styles.info}>Carbs: {recipe.carbs}</Text>
        <Text style={styles.info}>Protein: {recipe.protein}</Text>
        <Text style={styles.info}>Prep Time: {recipe.prepTime}</Text>
        <Text style={styles.info}>Servings: {recipe.servings}</Text>
        <Text style={styles.subTitle}>Ingredients:</Text>
        <Text style={styles.text}>{recipe.ingredients}</Text>
        <Text style={styles.subTitle}>Directions:</Text>
        <Text style={styles.text}>{recipe.directions}</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Save Recipe</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MealPrep;
