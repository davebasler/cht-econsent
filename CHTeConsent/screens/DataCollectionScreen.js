import {Button, Text, View} from "react-native";

function DataCollectionScreen({navigation}) {
  return (
    <View>
      <h2>Data Collection</h2>
      <Text>Thank you for being ready to undergo this health procedure. We will explain the most important steps of the
        procedure and will then ask you to sign the electronic consent.</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate('DataSecurity')}
      />
    </View>
  );
}

export default DataCollectionScreen;
