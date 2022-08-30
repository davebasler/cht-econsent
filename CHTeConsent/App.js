import React from 'react';
import { Text, View } from 'react-native';
import IntroForm from '../CHTeConsent/forms/IntroForm';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <IntroForm></IntroForm>
    </View>
  )
}
export default App;