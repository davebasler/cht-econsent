import {Button, Text, View} from "react-native";

function MoreInformationScreen({navigation}) {
  return(
    <View>
      <h2>More Information</h2>
      <Text>I am your Chronic Care Village Health Worker (CC-VHW) and I am part of a team conducting researchon chronic
        disease care in Lesotho. I am giving you information about the ComBaCaL study and inviting you to be part of it.
        There may be some words you do not understand. Please ask me to stop as we go through the information and I will
        take the time to explain it and answer all the questions you have. If you have questions later, you are free to contact
        me or the study responsibles whose numbers are mentioned at the end of the form any time. </Text>
      <Button
        title='Next'
        onPress={() => {navigation.navigate('DataCollection')}}
      />
    </View>
)
}

export default MoreInformationScreen;
