import { useState } from 'react';
import './App.css';
import InputComponent from './components/InputComponent';

const App = () => {
  const users = [
    {
      username: "user1",
      password: "123"
    }
    ,
    {
      username: "user2",
      password: "1234"
    }
    ,
    {
      username: "user3",
      password: "12345"
    }
  ]

  let [gatheredData, setGatheredData] = useState(null)

  const getInfo = (data) => {
    setGatheredData(gatheredData = { ...data })
    console.log(gatheredData)
  }

  const handleLogout = () => {
    setGatheredData(gatheredData = null)
  }

  return (
    <div className="App">
      {gatheredData && users.find(obj => {return gatheredData.username === obj.username && gatheredData.password === obj.password})
        ? <div>
            <p style={{ fontSize: "50px" }}>Welcome {users[users.indexOf(users.find(obj => {return gatheredData.username === obj.username && gatheredData.password === obj.password}))].username}!</p>
            <button onClick={handleLogout} className="LogoutButton">Logout</button>
          </div>
        : <InputComponent addUserInfo={getInfo} />
      }
    </div>
  );
}

export default App;
