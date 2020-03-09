import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import TodoItem from './todoItem';

const Todo = props => {
  const handleRemovePress = index => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  return (
    <View style={styles.todoContainer}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 6,
    margin: 30,
  },
});

export default Todo;
