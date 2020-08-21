import React, { useState } from 'react';
import './App.css';
import { Button, Input } from 'semantic-ui-react'
import { Image } from "semantic-ui-react"
import CustomCard from "./components/CustomCard"

function App() {

  const [user, setUser] = useState({})
  const [active, setActive] = useState(false)
  const [userSearch, setUserSearch] = useState("")
  console.log(userSearch)


  const handleToggle = () => {

    fetch("https://api.github.com/users/mhartley19")
      .then(response => response.json())
      .then(info => setUser(info))
    setActive(!active)

  }

  const hideInfo = (props) => {
    setActive(false)
    return (
      <>
      <header>
        <Button className="ui-primary" onClick={handleToggle}>Show Info </Button>
      </header>
    
    </>)
      
    
  }

  if (active) {
    return (
      <>
        <header> <Button className="ui-primary" onClick={hideInfo}>Hide Info</Button>
        </header>
        <CustomCard imageURL={user.avatar_url} name={user.name} url={user.blog}
          bio={user.bio} />

      </>)
  }

  else {
    return (
      <>
      <header><Button className="ui-primary" onClick={handleToggle}>Show Info</Button></header>
      <div id = "input" className="ui input"><input onChange ={entry => setUserSearch(entry.target.value)} 
          type="text" placeholder="Search for User info..."/></div>
      </>
    )

  }
}
export default App;
