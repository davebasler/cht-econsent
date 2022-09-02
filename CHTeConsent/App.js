import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import {
  ConfirmScreen, ConsentScreen,
  DataCollectionScreen,
  DataForm,
  DataSecurityScreen,
  MoreInformationScreen, SignatureScreen,
  WelcomeScreen
} from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='DataForm'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name={"DataForm"} component={DataForm}/>
          <Stack.Screen name={"ConfirmScreen"} component={ConfirmScreen}/>
          <Stack.Screen name={"Welcome"} component={WelcomeScreen}/>
          <Stack.Screen name={"MoreInfo"} component={MoreInformationScreen}/>
          <Stack.Screen name={"DataCollection"} component={DataCollectionScreen}/>
          <Stack.Screen name={"DataSecurity"} component={DataSecurityScreen}/>
          <Stack.Screen name={"Consent"} component={ConsentScreen}/>
          <Stack.Screen name={"Signature"} component={SignatureScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

  )
}
