import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';

const Todo = props => {
  const handleRemovePress = index => {
    const newTodos = [...props.todos];
    newTodos.splice(index, 1);
    props.setTodos(newTodos);
  };

  return (
    <View style={styles.todoContainer}>
      {props.todos.map((todo, index) => {
        return (
          <View style={styles.todo}>
            <Text style={styles.todoText}>{todo}</Text>
            <TouchableOpacity onPress={() => handleRemovePress(index)}>
              {/* <Text style={styles.todoX}>X</Text> */}
              <Icon name="closecircleo" size={30} color="red" />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 6,
    margin: 30,
  },
  todo: {
    flexDirection: 'row',
    width: width / 1.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 6,
  },
  todoText: {
    marginRight: 20,
    fontSize: 30,
    color: '#7d8287',
  },
});

export default Todo;
