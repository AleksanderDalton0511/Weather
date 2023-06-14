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

  if (selected){
    try{
      const locat = <Text style={{color: "red"}}>{results.location.name}</Text>
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setSelected(false)} style={{marginRight: "80%"}}><Text style={{color: "lawngreen"}}>B A C K {locat}</Text></TouchableOpacity>
        


        <DataTable style={{marginBottom: "20%", borderColor: "red"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "blue"}}>N0W</Text></DataTable.Cell>
        <DataTable.Cell><Text>{results.current.temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell>{results.current.condition.text}</DataTable.Cell>
      </DataTable.Row>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "blue"}}>DAYTIME</Text></DataTable.Cell>
        <DataTable.Cell>{results.forecast.forecastday[0].astro.sunrise}</DataTable.Cell>
        <DataTable.Cell>{results.forecast.forecastday[0].astro.sunset}</DataTable.Cell>
      </DataTable.Row>

    </DataTable>

      <TouchableOpacity style={{backgroundColor: "darkgrey", paddingRight: "5%", paddingLeft: "5%"}}><Text style={{color: "red"}}>TODAY</Text></TouchableOpacity>

    <DataTable style={{marginTop: "20%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell>00:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>03:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>06:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>09:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>12:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>15:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>18:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>21:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>23:00</DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.current.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

    </DataTable>

        <StatusBar style="auto" />
      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen", textDecoration: "none"}}></TextInput>
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
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen", textDecoration: "none"}}></TextInput>
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