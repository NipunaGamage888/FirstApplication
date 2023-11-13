// Footer.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('BarcodeScanner')}>
        <FontAwesome5 name="barcode" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
        <FontAwesome5 name="plus-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional: Set a background color for the footer
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Footer;
