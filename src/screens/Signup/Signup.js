import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Signup;
