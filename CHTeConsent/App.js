import React from 'react';
import DataForm from './screens/DataForm';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import ConfirmScreen from "./screens/ConfirmScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='DataForm'
        >
          <Stack.Screen name={"DataForm"} component={DataForm}/>
          <Stack.Screen name={"ConfirmScreen"} component={ConfirmScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}
