import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import ProgressBar from './progressBar.js';
import DonutChart from './DonutChart.js'; // Assuming you use it somewhere in the component
import axios from "axios";
import { generateMealPlan } from './GenerateMealPlan.js';  // Adjust the path accordingly

const Home = ({ navigation }) => {
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('Rachel P.');
  const [email, setEmail] = useState('user@example.com');
  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);
  const [calorieGoal, setCalorieGoal] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [mealPlan, setMealPlan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          
          const response = await axios.get(`http://192.168.0.5:8080/users/getUser?email=${email}`);
          const userData = response.data;
          if (userData) {
            setName(userData.name);
            setBreakfast(userData.meals.breakfast);
            setLunch(userData.meals.lunch);
            setDinner(userData.meals.dinner);
            setCalorieGoal(userData.calorieGoal);
            setDietaryRestrictions(userData.dietaryRestrictions);
            setFitnessGoals(userData.fitnessGoals);
          } else {
            console.error("User not found or incorrect credentials");
          }
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    };
    fetchData();
  }, [email]);

  const getUserData = async (key) => {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
      setEmail(result);
      return result;
    } else {
      console.log('No value stored under that key.');
      return null;
    }
  };

  const data = [
    [30], // Data for the first ring
    [20], // Data for the second ring
    [10], // Data for the third ring
    [40], // Data for the fourth ring
  ];

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700'];

  const currentDate = new Date();

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  const handleGenerateMealPlan = async () => {
    const userInput = {
      calorieGoal,
      dietaryRestrictions,
      fitnessGoals,
    };

    try {
      const generatedMealPlan = await generateMealPlan(userInput);
      setMealPlan(generatedMealPlan); // Assuming `setMealPlan` exists in the state
    } catch (error) {
      console.error("Error generating meal plan:", error);
    }
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Good morning, {username}</Text>
        <View style={styles.row}>
          <Text style={styles.date}>{formattedDate}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleGenerateMealPlan()}>
            <Text style={styles.buttonText} >Refresh Meals</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Breakfast</Text>
          {breakfast ? (
            <View style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{breakfast.name}</Text>
                <Text style={styles.nutritionText}>Calories: {breakfast.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {breakfast.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {breakfast.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {breakfast.fat}g</Text>
              </View>
              <View style={styles.progressContainer}>
                <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color="#3357FF"/>
                <ProgressBar percentage={60} color="#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />
              </View>
              {breakfast.imageUrl ? (
                <Image source={{ uri: breakfast.imageUrl }} style={styles.image} resizeMode="cover" />
              ) : null}
            </View>
          ) : (
            <Text>No breakfast data available</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lunch</Text>
          {lunch ? (
            <View style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{lunch.name}</Text>
                <Text style={styles.nutritionText}>Calories: {lunch.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {lunch.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {lunch.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {lunch.fat}g</Text>
              </View>
              <View style={styles.progressContainer}>
                <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color="#3357FF"/>
                <ProgressBar percentage={60} color="#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />
              </View>
              {lunch.imageUrl ? (
                <Image source={{ uri: lunch.imageUrl }} style={styles.image} resizeMode="cover" />
              ) : null}
            </View>
          ) : (
            <Text>No lunch data available</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dinner</Text>
          {dinner ? (
            <View style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{dinner.name}</Text>
                <Text style={styles.nutritionText}>Calories: {dinner.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {dinner.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {dinner.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {dinner.fat}g</Text>
              </View>
              <View style={styles.progressContainer}>
                <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color="#3357FF"/>
                <ProgressBar percentage={60} color="#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />
              </View>
              {dinner.imageUrl ? (
                <Image source={{ uri: dinner.imageUrl }} style={styles.image} resizeMode="cover" />
              ) : null}
            </View>
          ) : (
            <Text>No dinner data available</Text>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', // Light grey-blue background for the whole screen
  },
  titleContainer: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40, // More space on iOS for the status bar
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f5eedc', // Blue background for the title section
    borderBottomLeftRadius: 20, // Rounded corners at the bottom
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', // White text for contrast against the blue background
    textAlign: 'left',
  },
  date: {
    fontSize: 15,
    color: 'black', // Light blue text for the date
    textAlign: 'left',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between'
  },
  button: {
    marginLeft: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 140
  },
  buttonText: {
    fontSize: 15,
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 5,
    justifyContent: 'left',
    alignItems: 'left',
    width: '92%', // Slightly reduced width for some padding on the sides
    padding: 15,
    backgroundColor: '#fff', // White background for the sections
    borderRadius: 15, // Softer rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark grey text for section titles
  },
  mealInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Ensure content aligns at the top
    flexWrap: 'wrap', // Allow wrapping in case content exceeds available space
    marginBottom: 10,
    width: '100%', // Make sure it uses the full width of the section
  },
  mealDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  mealText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark grey text for meal names
  },
  nutritionText: {
    fontSize: 16,
    color: '#666', // Light grey text for nutritional info
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  progressContainer: {
    width: '15%',
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default Home;
