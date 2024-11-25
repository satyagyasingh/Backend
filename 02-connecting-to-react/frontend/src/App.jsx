import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  //this runs in port 5173 and accessing port 3000 is not possible because of security so we use proxy, that makes 3000 feel like this request is sent from 3000 only, proxy added in vite.config.js
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
      console.log(response + response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <>
      
      <h1>FrontEnd hai ye</h1>
      <p>jokes : {jokes.length }</p>
      {
        jokes.map((joke,index) => {
          return <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
