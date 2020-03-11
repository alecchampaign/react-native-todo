import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Button from './src/button';
import Modal from './src/modal';
import Todo from './src/todo';
import * as moment from 'moment';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleModalPress = () => setIsActive(!isActive);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f3f6fb" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            {moment.default().format('dddd, MMMM Do')}
          </Text>
        </View>
        <Todo todos={todos} setTodos={setTodos} />
        <View style={styles.inputContainer}>
          <Button buttonContent="Add todo" handlePress={handleModalPress} />
        </View>
        <Modal
          isActive={isActive}
          todos={todos}
          setTodos={setTodos}
          setIsActive={setIsActive}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3dabf0',
  },
  container: {
    backgroundColor: '#f3f6fb',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#f3f6fb',
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
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
