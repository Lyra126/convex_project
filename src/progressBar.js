import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const ProgressBar = ({ percentage, color }) => {
  const progress = new Animated.Value(0);

  Animated.timing(progress, {
    toValue: percentage,
    duration: 500,
    useNativeDriver: false,
  }).start();

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.fill, { width: progressWidth, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0', // Light grey background for the progress bar
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 2, // Space between bars
  },
  fill: {
    height: '100%',
    backgroundColor: '#4caf50', // Default green color
    borderRadius: 10,
  },
});

export default ProgressBar;
