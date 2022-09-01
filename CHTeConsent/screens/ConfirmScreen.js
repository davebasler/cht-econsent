import {Text, View} from "react-native";

function ConfirmScreen({navigation, route}) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();

  return (
    <View>
      <h1>Confirm Screen</h1>
      <Text>Please confirm patient information:</Text>
      <Text>Surname: {route.params.surname}</Text>
      <Text>Name: {route.params.name}</Text>
      <Text>Date: {`${day}.${month}.${year}`}</Text>
    </View>
  )
}

export default ConfirmScreen;
