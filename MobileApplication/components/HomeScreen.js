// HomeScreen.js

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Footer from './footer.js';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Yudaa</Text>

      {/* Image scrolling menu */}
      <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageContainer}>
        <Image
          source={require('../assets/Food1.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../assets/Food2.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../assets/Cosmetics2.webp')}
          style={styles.image}
        />
        <Image
          source={require('../assets/Cosmetics1.webp')}
          style={styles.image}
        />
      </ScrollView>
      <Text style={styles.additionalText}>Be healthy and live happily</Text>

      {/* Your main content goes here */}

      {/* Footer */}
      <Footer />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Set your desired background color
    },
    imageContainer: {
        flexGrow:1,
      alignItems: 'center', 
      justifyContent:'center',// Center the images horizontally
      paddingVertical: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
        marginBottom:0
    },
    additionalText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 120,
    },
    image: {
      width: 450, // Adjust the width of your images as needed
      height: 450, // Adjust the height of your images as needed
      marginHorizontal: 10,
      borderRadius: 10, // Optional: Add borderRadius for rounded corners
    },
  });
  
  export default HomeScreen;
  
 