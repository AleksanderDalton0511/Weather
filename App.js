import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const[results, setResults] = useState();
  let city = "Tallinn";

const request = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3&dt=2023-05-31';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c9510ca70mshf8fe7463f988101p197cb5jsn5804d7f8fa69',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  setResults(result);
} catch (error) {
	console.error(error);
}
}
request();

  return (
    <View style={styles.container}>
      <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
      <TextInput value={city} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%"}}></TextInput>
      <Text style={{color: 'lawngreen'}}>{results}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});