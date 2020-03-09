import React, {useState} from 'react';
import {TextInput, View, Dimensions, StyleSheet} from 'react-native';
import Button from './button';

const {width, height} = Dimensions.get('window');

const Modal = props => {
  const [value, setValue] = useState('');
  const handleChange = text => setValue(text);

  const handleAddPress = () => {
    if (value) {
      props.setTodos([...props.todos, value]);
      setValue('');
      props.setIsActive(false);
    }
  };

  return props.isActive ? (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder="What's up?"
      />
      <Button buttonContent="Create new todo" handlePress={handleAddPress} />
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 4.5,
    borderRadius: 20,
    padding: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  input: {
    fontSize: 25,
    marginBottom: 20,
    borderBottomColor: '#3dabf0',
    borderBottomWidth: 1,
    width: width / 1.5,
    color: '#7d8287',
  },
});

export default Modal;
