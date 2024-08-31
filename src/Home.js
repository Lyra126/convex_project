import React, { useRef, useEffect, useState } from "react";import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { View, Text, InteractiveArea, Dimensions, StyleSheet, TouchableOpacity, Image,ImageBackground, Platform, Keyboard, ActivityIndicator} from "react-native";
import { GestureHandlerRootView, Gesture, GestureDetector} from "react-native-gesture-handler";
import * as SecureStore from 'expo-secure-store';
import axios from "axios"; 
  //apples
  const apple1 = require('./assets/fruitTrees/apple1.png');
  const apple2 = require('./assets/fruitTrees/apple2.png');
  const apple3 = require('./assets/fruitTrees/apple3.png');
  const apple4 = require('./assets/fruitTrees/apple4.png');
  const apple5 = require('./assets/fruitTrees/apple5.png');
  //peaches
  const peach1 = require('./assets/fruitTrees/peach1.png');
  const peach2 = require('./assets/fruitTrees/peach2.png');
  const peach3 = require('./assets/fruitTrees/peach3.png');
  const peach4 = require('./assets/fruitTrees/peach4.png');
  const peach5 = require('./assets/fruitTrees/peach5.png');
  //oranges
  const orange1 = require('./assets/fruitTrees/orange1.png');
  const orange2 = require('./assets/fruitTrees/orange2.png');
  const orange3 = require('./assets/fruitTrees/orange3.png');
  const orange4 = require('./assets/fruitTrees/orange4.png');
  const orange5 = require('./assets/fruitTrees/orange5.png');
  //mangos
  const mango1 = require('./assets/fruitTrees/mango1.png');
  const mango2 = require('./assets/fruitTrees/mango2.png');
  const mango3 = require('./assets/fruitTrees/mango3.png');
  const mango4 = require('./assets/fruitTrees/mango4.png');
  const mango5 = require('./assets/fruitTrees/mango5.png');
  //bananas
  const banana1 = require('./assets/fruitTrees/banana1.png');
  const banana2 = require('./assets/fruitTrees/banana2.png');
  const banana3 = require('./assets/fruitTrees/banana3.png');
  const banana4 = require('./assets/fruitTrees/banana4.png');
  const banana5 = require('./assets/fruitTrees/banana5.png');

  const wateringCan = require('./assets/wateringCan.png')
  const pourWateringCan = require('./assets/pourWateringCan.png')
  const restWateringCan = require('./assets/restWateringCan.png')


const Home = ({ navigation}) => {
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [fruitTree, setFruitTree] = useState("white");
  const [showWateringCan, setShowWateringCan] = useState(false);
  const [showWateringCanButton, setShowWateringCanButton] = useState(true);
  const [wateringCanImage, setWateringCanImage] = useState(wateringCan);
  const wateringCanRef = useRef(null);
  const wcButton = useRef(null);
  const [loading, setLoading] = useState(true);

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  const getUserData = async (key) => {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
        setEmail(result);
        return result;
    } else {
        console.log('No value stored under that key.');
        return null;
    }
}

useEffect(() => {
  const fetchData = async () => {
    try {
      const userEmail = await getUserData("email");
      if (userEmail) {
        const response = await axios.get(`http://192.168.1.159:8080/users/getUser?email=${userEmail}`);
        const userData = response.data;
        if (userData) {
          setPoints(userData.current_points);
          setFruitTree(userData.tree_type);
        } else {
          console.error("User not found or incorrect credentials");
        }
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  fetchData();
}, []);

  
  const showWateringCanAnimation = () =>{
    setShowWateringCanButton(false);
    //setShowWateringCan(wateringCan => !wateringCan);
    if(wateringCan == true){
      
      setShowWateringCan(false);
    }else{
      setWateringCanImage(wateringCan);
      setShowWateringCan(true);
      //rotate it
      setTimeout(function (){
        if(wateringCanRef.current){
          wateringCanRef.current.setNativeProps({ style: { transform: [{ rotate: '-45deg' }] }});
        }
      }, 1000);
      
      //change image to pouring
      setTimeout(function (){
        setWateringCanImage(pourWateringCan);
      }, 1000);
      
      //set it back
      setTimeout(function (){
        setWateringCanImage(wateringCan);
        wateringCanRef.current.setNativeProps({ style: { transform: [{ rotate: '0deg' }] }});
        setTimeout(() => {
          setShowWateringCan(false);
          setShowWateringCanButton(true);
        }, 500); // Adjust the delay as needed
      }, 2000);
    }
    
  };


  // Update background image based on points
  const getBackgroundImage = () => {
    const stage = Math.floor(points / 20) % 5 + 1;
    let image;

    switch (fruitTree) {
      
      case "Apple":
        switch (stage) {
          case 1: image = apple1; break;
          case 2: image = apple2; break;
          case 3: image = apple3; break;
          case 4: image = apple4; break;
          case 5: image = apple5; break;
          default: image = apple1; break;
        }
        break;
      case "Peach":
        switch (stage) {
          case 1: image = peach1; break;
          case 2: image = peach2; break;
          case 3: image = peach3; break;
          case 4: image = peach4; break;
          case 5: image = peach5; break;
          default: image = peach1; break;
        }
        break;
      case "Mango":
        switch (stage) {
          case 1: image = mango1; break;
          case 2: image = mango2; break;
          case 3: image = mango3; break;
          case 4: image = mango4; break;
          case 5: image = mango5; break;
          default: image = mango1; break;
        }
        break;
      case "Banana":
        switch (stage) {
          case 1: image = banana1; break;
          case 2: image = banana2; break;
          case 3: image = banana3; break;
          case 4: image = banana4; break;
          case 5: image = banana5; break;
          default: image = banana1; break;
        }
        break;
      case "Orange":
        switch (stage) {
          case 1: image = orange1; break;
          case 2: image = orange2; break;
          case 3: image = orange3; break;
          case 4: image = orange4; break;
          case 5: image = orange5; break;
          default: image = orange1; break;
        }
        break;
      default:
        image = apple1; // Default to apple
    }

    return image;
  };    
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
    return (
      <>
      {points !== 0 && fruitTree !== "white" && (
        <ImageBackground source={getBackgroundImage()} style={styles.container}>
          <View style={styles.wateringCanContainer}>
            {showWateringCan && <Image source={wateringCanImage} ref={wateringCanRef} style={styles.wateringCan} />}
          </View>
          <TouchableOpacity style={styles.touchWC} onPress={() => showWateringCanAnimation()}>
            {showWateringCanButton && <Image source={restWateringCan} ref={wcButton} style={styles.restWC} />}
          </TouchableOpacity>
        </ImageBackground>
      )}
    </>
    );
  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Adjust for status bar height
  },
  wateringCan: {
    width:200,
    height:200
  },
  wateringCanContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginTop: 0,
    marginLeft: 170,
    zIndex: 1
  },
  restWC: {
    marginTop: 0,
    marginLeft: 180,
    width: 200,
    height: 200
  }
});

export default Home;
