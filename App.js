import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
export default function App() {
  const[results, setResults] = useState([]);
  const[city, setCity] = useState('');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 
if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
const request = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3=' + today;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c9510ca70mshf8fe7463f988101p197cb5jsn5804d7f8fa69',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
  setResults(result);
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
    request();
  });
  function show(){
    setSelected(true);
  }

  const [selected, setSelected] = useState(false);

  const [isToday, setToday] = useState(true);
  let day;
  let word;
  if (selected){
    if (isToday){
      day = 0;
      word = "TODAY";
      }
      else{
        day = 1;
        word = "TOMORROW";
      }
    try{
      const locat = <Text style={{color: "white"}}>{results.location.name}</Text>
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelected(false)} style={{marginRight: "80%", marginTop: "5%"}}><Text style={{color: "red"}}>B A C K {locat}</Text></TouchableOpacity>
        


        <DataTable style={{marginBottom: "20%"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "red"}}>N0W</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "white"}}>{results.current.temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "white"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "red"}}>DAYTIME</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "white"}}>{results.forecast.forecastday[0].astro.sunrise}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "white"}}>{results.forecast.forecastday[0].astro.sunset}</Text></DataTable.Cell>
      </DataTable.Row>

    </DataTable>

      <TouchableOpacity style={{backgroundColor: "darkgrey", paddingRight: "5%", paddingLeft: "5%"}}><Text style={{color: "red"}}>{word}</Text></TouchableOpacity>

    <DataTable style={{marginTop: "5%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>00:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[0].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>03:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[3].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>06:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[6].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>09:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[9].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>12:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[12].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>15:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[15].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>18:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[18].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>21:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[21].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>23:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[23].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

    </DataTable>

    <TouchableOpacity style={{width: "100%", alignItems: "center"}}><Text style={{color: "white", paddingTop: "5%"}}>H O U R L Y</Text></TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
          <Text style={{color: "red"}}>Such city does not exist!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});