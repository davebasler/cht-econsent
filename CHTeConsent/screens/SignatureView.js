import {SafeAreaView, Text, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import Canvas from 'react-native-canvas';


function SignatureView({navigation}) {
  const [signature, setSignature] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [saveX, setX] = useState();
  const [saveY, setY] = useState();

  const canvas = useRef(null);
  let ctx = null;

  useEffect(() => {
    ctx = canvas.current.getContext('2d');
  })

  const handleOK = (signature) => {
    console.log(signature);
    setSignature(signature);
  }

  const getCursorPosition = (event) => {
    const positionX = event.clientX - event.target.getBoundingClientRect().x;
    const positionY = event.clientX - event.target.getBoundingClientRect().y;

    return [positionX, positionY]
  }

  const startDrawing = (event) => {
    console.log(event)
    setDrawing(true);
    ctx.beginPath();

    const [positionX, positionY] = getCursorPosition(event);

    ctx.moveTo(positionX, positionY);



  };
  const moved = (event) => {
    if (!drawing) return;
    console.log("move: " + event);

    const [positionX, positionY] = getCursorPosition(event);
    //let ctx = canvas.current.getContext('2d');
    ctx.lineTo(positionX, positionY);
    ctx.stroke();



  };
  const stopDrawing = (event) => {
    setDrawing(false);
  };

  const handleEmpty = () => {
    console.log('empty');
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

  return (
    <View>
      <h1>Signature</h1>
      <Text>Please sign here with your finger or a stylus.</Text>
      <canvas onTouchStart={startDrawing} onTouchMove={moved} onTouchEnd={stopDrawing} ref={canvas}/>
    </View>
  );
}

export default SignatureView;
