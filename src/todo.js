import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import TodoItem from './todoItem';

const {height, width} = Dimensions.get('window');

const Todo = props => {
  const handleRemovePress = index => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  return (
    // <View style={styles.todoContainer}>
    //   {props.todos.map((todo, index) => {
    //     return <TodoItem todo={todo} />;
    //   })}
    // </View>
    <View style={styles.todoContainer}>
      <SwipeListView
        style={styles.todoContainer}
        contentContainerStyle={styles.contentContainer}
        data={props.todos}
        renderItem={(data, rowMap) => <TodoItem todo={data.item} />}
        renderHiddenItem={(data, rowMap) => <View></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 10,
    alignSelf: 'stretch',
  },
  contentContainer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default Todo;
