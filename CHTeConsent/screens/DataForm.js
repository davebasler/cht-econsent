import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from "react-native-web";

function DataForm({navigation}) {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');

  return (
    <View>
      <h1>CHT eConsent</h1>
      <Text>Please enter the following patient information:</Text>
      <TextInput
        placeholder="Surname"
        style={styles.input}
        onChangeText={setSurname}
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={setName}
      />
      <Button
        title="Submit"
        onPress={() => navigation.navigate('ConfirmScreen', {surname, name})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: 'white',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 5,
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DataForm;
