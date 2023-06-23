import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaInfo from "./NasaInfo";
import "./App.css";

function App() {
  const [image, setImage] = useState({}); // içinde {} olmalı

  useEffect(
    () => {
     axios.get( "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
           .then((res)=>{
            setImage(res.data);
          }).catch((err)=>{
            console.error("NASA API ERROR! ", err);
          });
},
[]
);


  return (
    <div className="App">
      <h1>Astronomy Photo Of The Day</h1>
      <NasaInfo nasaData ={image} />
    </div>
  );
}

export default App;
