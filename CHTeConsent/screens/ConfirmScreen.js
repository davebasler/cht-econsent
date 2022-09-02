import {Text, View} from "react-native";
import {Button} from "react-native-web";
import React, {useState} from "react";

function ConfirmScreen({navigation, route}) {
  const [surname, setSurname] = useState(route.params.surname);
  const [name, setName] = useState(route.params.name);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <View>
      <h1>Confirm Screen</h1>
      <Text>Please confirm patient information:</Text>
      <Text>Surname: {route.params.surname}</Text>
      <Text>Name: {route.params.name}</Text>
      <Text>Date: {`${day}.${month}.${year}`}</Text>
      <Button
        title="Submit"
        onPress={() => navigation.navigate('Welcome', {surname, name})}
      />
    </View>
  )
}

export default ConfirmScreen;
