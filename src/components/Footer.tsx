import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {useDeveloperInfo} from '../context/useDeveloperInfo';

export default function Footer() {
  const {developerName} = useDeveloperInfo();
  return (
    <View style={{flex: 1}}>
      <View style={styles.footerStyle}>
        <Text style={styles.textStyle}>
          This app has been developed by {developerName.toLowerCase()}!!
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#b2b2f230',
    borderRadius: 10,
  },
  textStyle: {
    marginHorizontal: 20,
  },
});
