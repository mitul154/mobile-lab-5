import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
export default function ToDoForm({tasks, setTasks}) {
  const [newTask, setNewTask] = useState('');
  return (
    <View style={styles.form}>
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button
        onPress={() => {
          setTasks([...tasks, newTask]);
        }}
        title="Add"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
