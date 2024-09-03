import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from "react-native";
import * as SecureStore from 'expo-secure-store';
import axios from "axios"; 

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [username, setUsername] = useState('Rachel P.');
  const breakfast = [
    { name: 'Oatmeal', calories: 150, protein: 5, carbs: 27, fats: 3, sugars: 1, image: require('./assets/oatmeal.jpeg') },
  ];

  const lunch = [
    { name: 'Chicken Salad', calories: 250, protein: 20, carbs: 10, fats: 15, sugars: 2, image: require('./assets/oatmeal.jpeg') },
  ];

  const dinner = [
    { name: 'Grilled Salmon', calories: 350, protein: 30, carbs: 0, fats: 20, sugars: 0, image: require('./assets/oatmeal.jpeg') },
  ];

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
                <Text style={styles.nutritionText}>Sugars: {item.sugars}g</Text>
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
                <Text style={styles.nutritionText}>Sugars: {item.sugars}g</Text>
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
                <Text style={styles.nutritionText}>Sugars: {item.sugars}g</Text>
              </View>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
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
    marginVertical: 10,
    justifyContent: 'left',
    alignItems: 'left',
    width: '90%', // Slightly reduced width for some padding on the sides
    padding: 20,
    backgroundColor: '#fff', // White background for the sections
    borderRadius: 15, // Softer rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Elevation for Android
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  mealInfo: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nutritionText: {
    fontSize: 16,
    color: '#555',
  }, 
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});


export default Home;
