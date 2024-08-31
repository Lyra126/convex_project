import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity, ImageBackground } from "react-native";

const FindComposter = ({ navigation }) => {
    const navigateToScreen = (screen, message) => {
        navigation.navigate(screen, { message });
    };
      

    return (
        <ImageBackground source={require("./assets/findcomposter.png")} style={styles.backgroundImage}>
        <View style={styles.topButtonsContainer}>
        </View>
        <View style={styles.container}>
            <Text style={styles.title}>Find a Composter Near You</Text>
            <TouchableOpacity style={styles.button1} onPress={() => navigateToScreen("Map", "Farms")}>
            <Text style={styles.buttonText}>Farm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigateToScreen("Map", "Community gardens")}>
            <Text style={styles.buttonText}>Comm. Garden</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => navigateToScreen("Map", "Farmer markets")}>
            <Text style={styles.buttonText}>Farmer Market</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 500
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
  },
  button1: {
    marginVertical: 10,
    width: '80%',
    position: 'absolute', // Set position to absolute
    top: 270, // 165
    left: 75,
    alignItems: "center",
  },
  button2: {
    marginVertical: 10,
    width: '80%',
    position: 'absolute', // Set position to absolute
    top: 375, // 273
    left: 18,
    alignItems: "center",
  },
  button3: {
    marginVertical: 10,
    width: '80%',
    position: 'absolute', // Set position to absolute
    top: 485, // 385
    left: 90,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FindComposter;