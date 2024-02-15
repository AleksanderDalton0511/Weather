import Gps from "./gps.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from "expo-navigation-bar";

const Stack = createNativeStackNavigator();

NavigationBar.setVisibilityAsync("hidden");
NavigationBar.setBehaviorAsync("overlay-swipe");

export default function App() {

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
                <Stack.Screen name="Gps" component={Gps}/>
            </Stack.Navigator>
            <StatusBar hidden />
        </NavigationContainer>
  );
}
