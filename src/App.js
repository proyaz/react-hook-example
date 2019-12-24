import React, { useState, useCallback } from 'react';
import './App.css';
import ColorArea from './Colors/Colors';
import Button from './Buttons/Buttons';

const App = props => {

  const [buttonColor, setButtonColor] = useState({
    colors: [
      {
        firstColorButton: "orange",
        secondColorButton: "green",
        thirdColorButton: "blue"
      }
    ]
  });

  let [areaColor, setAreaColor] = useState("red");

  const switchAreaColor = useCallback(
    (abc) => {
      console.log('Click happened');
      setAreaColor(abc)
    },
    [], // Tells React to memoize regardless of arguments.
  );

  return (
    <div className="App">
      <h1>This is a react app!</h1>
      <Button sendFun={()=>switchAreaColor(buttonColor.colors[0].firstColorButton)} color={buttonColor.colors[0].firstColorButton}></Button>
      <Button sendFun={()=>switchAreaColor(buttonColor.colors[0].secondColorButton)} color={buttonColor.colors[0].secondColorButton}></Button>
      <Button sendFun={()=>switchAreaColor(buttonColor.colors[0].thirdColorButton)} color={buttonColor.colors[0].thirdColorButton}></Button>

      <ColorArea backgroundName={areaColor} />


    </div>
  );
};

export default App;