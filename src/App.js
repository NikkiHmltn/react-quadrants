import { useState, useEffect } from "react";
import "./assets/styles.scss"
// import Section, Kawaii, and Button components
import Section from "./components/Section";
import Kawaii from "./components/Kawaii";
import Button from "./components/Button";

function App() {
  // set the gifs state to hold an empty array when initiated, but it should only hold 2 gifs at any point in time after the API is called
  const [gifs, setGifs] = useState([])
  // do you need any other states? 
  const [mood, setMood] = useState(null)
  
  // set some variables for your API key and fetch URL
  const API_KEY = "ewKPhBsNz8wpISnVQ4SNOPs4nl0bOGPO"
  const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`

  // make your api call function(s) here (get creative with calling 2 APIs!)
    // note: your API MUST be rated PG -- no inappropriate gifs please :) We recommend you check out the API Explorer on Giphy's site for how to do this
    // IMPORTANT NOTE: stop your react app ANYTIME you start typing. if you dont, you will rapidly hit your 100 calls per hour and will be unable to test your api calls until that hour is up 
  
  const fetchData = async() =>{
    setMood("sad")
    const response = await fetch(URL)
    const data = await response.json()
    console.log([data.data.images.original.url])
    setGifs([data.data.images.original.url])

    const response2 = await fetch(URL)
    const data2 = await response2.json()
    console.log(data2.data.images.original.url)
    setGifs((gifs) => [...gifs, data2.data.images.original.url])
    setMood("blissful")
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div>
      <Section apiData={gifs[0]}/>
      <Section apiData={gifs[1]}/>
      <Kawaii mood={mood}/>
      <Button fetchData={fetchData}/>
    </div>
  );
}

export default App;
