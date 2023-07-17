import GeoLocation from 'react-native-geolocation-service';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
export default function App() {
  const[results, setResults] = useState([]);
  const[city, setCity] = useState('');
  const[isDaily, setDaily] = useState(false);
const request = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city + '&days=3';
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

  const request2 = async () => {const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + usePosition.coords.latitude+","+usePosition.coords.longitude + '&days=3';
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
  function show(){
    request();
    setSelected(true);
  }

    const [usePosition, setPosition] = useState();
    
    const getDeviceCurrentLocation = async () => {
      request2();
      setSelected(true);
      return new Promise((resolve, reject) =>
        GeoLocation.getCurrentPosition(
          (position) => {
            resolve(position);
            setPosition(position);
          },
          (error) => {
            reject(error);
          },
          {
            enableHighAccuracy: true, // Whether to use high accuracy mode or not
            timeout: 15000, // Request timeout
            maximumAge: 10000 // How long previous location will be cached
          }
        )
      );
    };

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

      function setSelectedFalse(){
        setSelected(false);
        setToday(true);
        setDaily(false);
      }

      let data;
      if(isDaily){
        data = <DataTable style={{marginTop: "5%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>TODAY</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].day.avgtemp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[0].day.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell><Text style={{color: "white"}}>TOMORROW</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[1].day.avgtemp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[1].day.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
      <DataTable.Cell><Text style={{color: "white"}}>AFTERTOMORROW</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[2].day.avgtemp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[2].day.condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      
    </DataTable>
      }
      else{
        data = <DataTable style={{marginTop: "5%", backgroundColor: "#7B858D"}}>

        <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>00:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[0].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[0].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>03:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[3].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[3].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>06:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[6].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[6].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>09:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[9].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[9].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>12:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[12].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[12].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>15:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[15].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[15].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>18:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[18].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[18].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>21:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[21].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[21].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{color: "white"}}>23:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[23].temp_c} C</Text></DataTable.Cell>
        <DataTable.Cell><Text style={{color: "red"}}>{results.forecast.forecastday[day].hour[23].condition.text}</Text></DataTable.Cell>
      </DataTable.Row>

    </DataTable>
      }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={setSelectedFalse} style={{marginRight: "80%", marginTop: "5%"}}><Text style={{color: "red"}}>B A C K {locat}</Text></TouchableOpacity>
        


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

      <TouchableOpacity onPress={(prevCheck) => setToday(prevCheck => !prevCheck)} style={{backgroundColor: "darkgrey", paddingRight: "5%", paddingLeft: "5%", paddingTop: "1%", paddingBottom: "1%"}}><Text style={{color: "red"}}>{word}</Text></TouchableOpacity>

    {data}

    <TouchableOpacity onPress={(prevCheck) => setDaily(prevCheck => !prevCheck)} style={{width: "100%", alignItems: "center"}}><Text style={{color: "white", paddingTop: "5%", fontSize: 18}}>H O U R L Y</Text></TouchableOpacity>

      </View>
    )}
    catch (error) {
      return (
        <View style={styles.container}>
          <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
          <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
          <TouchableOpacity style={{backgroundColor: "lawngreen"}} onPress={getDeviceCurrentLocation}><Text>My position</Text></TouchableOpacity>
          <Text style={{color: "red"}}>Such city does not exist!</Text>
        </View>
      );
    }
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={{color: 'lawngreen'}}>CHOOSE YOUR CITY:</Text>
        <TextInput onSubmitEditing = {() => show()} onChangeText={newText => setCity(newText)} style={{backgroundColor: 'darkgrey', width: "40%", marginTop: "3%", textAlign:"center", color: "lawngreen"}}></TextInput>
        <TouchableOpacity style={{backgroundColor: "lawngreen"}} onPress={getDeviceCurrentLocation}><Text>My position</Text></TouchableOpacity>
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