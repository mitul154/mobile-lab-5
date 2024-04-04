import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}: any) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const addTask = (taskText: string) => {
    if (taskText === '' || tasks.includes(taskText)) {
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm tasks={tasks} setTasks={setTasks} addTask={addTask} />
        <View style={styles.buttonStyle}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 30,
    marginHorizontal: 10,
  },
});
