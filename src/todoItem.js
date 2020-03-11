import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const TodoItem = props => {
  const [isActive, setIsActive] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => setIsActive(!isActive)}
      onLongPress={() => props.handleRemovePress(props.index)}
      style={
        isActive ? styles.todo : [styles.todo, {backgroundColor: '#f7f7f7'}]
      }>
      <Text
        style={
          isActive
            ? styles.todoText
            : [styles.todoText, {textDecorationLine: 'line-through'}]
        }>
        {props.todo}
      </Text>
      <Icon
        name={isActive ? 'checkcircleo' : 'checkcircle'}
        size={30}
        color="#7d8287"
        style={{flex: 1, textAlign: 'center', fontSize: 35}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    flex: 7,
  },
});

export default TodoItem;
