import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';
import Button from './src/button';
import Modal from './src/modal';
import Todo from './src/todo';
import * as moment from 'moment';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = value => setInputText(value);

  const handleModalPress = () => setIsActive(!isActive);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f6fb" />
      <SafeAreaView style={styles.container}>
        <Modal
          isActive={isActive}
          todos={todos}
          setTodos={setTodos}
          setIsActive={setIsActive}
        />
        <Text style={styles.header}>
          {moment.default().format('dddd, MMMM Do')}
        </Text>
        <Todo todos={todos} setTodos={setTodos} />
        <View style={styles.inputContainer}>
          <Button buttonContent="Add todo" handlePress={handleModalPress} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#3dabf0',
  },
  container: {
    backgroundColor: '#f3f6fb',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    marginLeft: 50,
    marginRight: 50,
    flex: 1,
    backgroundColor: '#f3f6fb',
    marginBottom: 50,
  },
  input: {
    color: 'white',
    alignSelf: 'stretch',
    textAlign: 'center',
    borderWidth: 1,
    width: 300,
  },
});

export default App;
