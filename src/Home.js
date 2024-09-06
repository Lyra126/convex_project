import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import ProgressBar from './progressBar.js';
import DonutChart from './DonutChart.js';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState('Rachel P.');

  const breakfast = [
    { name: 'Oatmeal', calories: 150, protein: 5, carbs: 27, fats: 3, image: require('./assets/oatmeal.jpeg') },
  ];

  const lunch = [
    { name: 'Chicken Salad', calories: 250, protein: 20, carbs: 10, fats: 15,  image: require('./assets/oatmeal.jpeg') },
  ];

  const dinner = [
    { name: 'Grilled Salmon', calories: 350, protein: 30, carbs: 0, fats: 20, image: require('./assets/oatmeal.jpeg') },
  ];

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
          <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('SomeScreen')}>
            <Text style={styles.buttonText}>Refresh Meals </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Breakfast</Text>
          {breakfast.map((item, index) => (
            <View key={index} style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{item.name}</Text>
                <Text style={styles.nutritionText}>Calories: {item.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {item.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {item.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {item.fats}g</Text>
              </View>
              <View style={styles.progressContainer}>
              <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color = "#3357FF"/>
                <ProgressBar percentage={60} color = "#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />
              </View>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lunch</Text>
          {lunch.map((item, index) => (
            <View key={index} style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{item.name}</Text>
                <Text style={styles.nutritionText}>Calories: {item.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {item.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {item.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {item.fats}g</Text>
              </View>
              <View style={styles.progressContainer}>
              <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color = "#3357FF"/>
                <ProgressBar percentage={60} color = "#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />
              </View>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dinner</Text>
          {dinner.map((item, index) => (
            <View key={index} style={styles.mealInfo}>
              <View style={styles.mealDetails}>
                <Text style={styles.mealText}>{item.name}</Text>
                <Text style={styles.nutritionText}>Calories: {item.calories}</Text>
                <Text style={styles.nutritionText}>Protein: {item.protein}g</Text>
                <Text style={styles.nutritionText}>Carbs: {item.carbs}g</Text>
                <Text style={styles.nutritionText}>Fats: {item.fats}g</Text>
                
              </View>
              <View style={styles.progressContainer}>
                <ProgressBar percentage={75} color="#ab635e" />
                <ProgressBar percentage={50} color = "#3357FF"/>
                <ProgressBar percentage={60} color = "#5e90ab" />
                <ProgressBar percentage={80} color="#FF5733" />


              </View>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          
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
    width:140
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
    shadowRadius: 5,

  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  mealInfo: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between', // Spread items to fill the space
    marginBottom: 5,
  },
  mealDetails: {
    flex: 2, // Takes up 2 parts of the space
  },
  progressContainer: {
    flex: 1, // Takes up 1 part of the space
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  progressBar: {
    marginVertical: 2, // Adjust vertical space between bars
  },
  mealText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nutritionText: {
    fontSize: 13,
    color: '#555',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    margin: 12
  },
});

export default Home;
