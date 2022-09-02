import {Button, Text, View} from "react-native";

function WelcomeScreen({navigation, route}) {
  return(
    <View>
      <h2>Welcome {route.params.name}</h2>
      <Text>Thank you for being ready to undergo this health procedure. We will explain the most important steps of the
        procedure and will then ask you to sign the electronic consent.</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('MoreInfo')}
      />
    </View>
  )
}

export default WelcomeScreen;
