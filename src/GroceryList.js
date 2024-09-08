import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";

const GroceryList = ({ navigation }) => {
  const [email, setEmail] = useState('user@example.com');
  const [groceryCart, setGroceryCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          
          const response = await axios.get(`http://10.138.111.183:8080/users/getUser?email=${email}`);
          const userData = response.data;
          if (userData) {
            setGroceryCart(userData.groceryCart);
            console.log("groceryCart")
          } else {
            console.error("User not found or incorrect credentials");
          }
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    };
    fetchData();
}, []);

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

  // Render each item in the grocery cart
  const renderGroceryItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.itemName}</Text>
      <Text style={styles.itemDetails}>Unit Price: ${item.unitPrice.toFixed(2)}</Text>
      <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemDetails}>Total Price: ${item.totalPrice.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grocery Cart</Text>
      {groceryCart.length > 0 ? (
        <FlatList
          data={groceryCart}
          keyExtractor={(item, index) => `grocery-item-${index}`}
          renderItem={renderGroceryItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />} // Add divider between items
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
});

export default GroceryList;
