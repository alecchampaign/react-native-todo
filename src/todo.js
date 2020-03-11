import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import TodoItem from './todoItem';

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
      <FlatList
        style={styles.todoContainer}
        contentContainerStyle={styles.contentContainer}
        data={props.todos}
        renderItem={(data, rowMap) => (
          <TodoItem
            todo={data.item}
            handleRemovePress={handleRemovePress}
            key={data.index}
          />
        )}
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
