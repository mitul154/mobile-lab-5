import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import {useDeveloperInfo} from '../context/useDeveloperInfo';

export default function AboutScreen() {
  const {appName, developerName} = useDeveloperInfo();
  const date = new Date().getDate();
  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.heading}>{appName}</Text>
        <Text style={styles.text}>Developed by: {developerName}</Text>
        <Text style={styles.text}>Date: {date}</Text>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});
