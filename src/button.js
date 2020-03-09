import React from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const Button = props => {
  return (
    <TouchableOpacity style={styles.inputButton} onPress={props.handlePress}>
      <Text style={styles.buttonText}>{props.buttonContent}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputButton: {
    alignSelf: 'stretch',
    width: width / 1.5,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3dabf0',
    borderColor: '#3dabf0',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Button;
