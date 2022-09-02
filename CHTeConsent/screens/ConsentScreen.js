import {Button, Text, View} from "react-native";

function ConsentScreen({navigation}) {
  return (
    <View>
      <h2>Consent</h2>
      <Text>Participant: I have read the previous information or it has been read to me. I have had the opportunity to ask
        questions and any questions I asked have been answered to my satisfaction. I consent voluntarily to participate
        in this study.</Text>
      <br/>
      <Text>Witnesses: I have witnessed the accurate reading of the consent form to the potential participant or their
        caregiver, and the individual has had the opportunity to ask questions. I confirm that consent was given freely.</Text>
      <Button title='Decline'/>
      <Button
        title='Accept'
        onPress={() => navigation.navigate('Signature')}
      />
    </View>
  )
}

export default ConsentScreen;
