// BarcodeScannerScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const BarcodeScanner = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Barcode scanned: ${data}`);
    // Handle the scanned data as needed
  };

  useEffect(() => {
    if (scanned) {
      navigation.navigate('Details', { barcodeData: 'Example Data' });
    }
  }, [scanned, navigation]);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={handleBarCodeScanned}
      />
      <View style={styles.overlay} />
      <Text style={styles.scanText}>Scan the barcode</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scanText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BarcodeScanner;
