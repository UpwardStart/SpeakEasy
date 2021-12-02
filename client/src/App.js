import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
    const dataRetrieval = async () => await axios.get('http://localhost:5000/users')
      .then(result => {setUsers(result.data)})
      .catch(err => console.error(err))

    useEffect(() => {
      dataRetrieval();
    }, []);
    console.log();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {users.map(user => <h2>Email {user.email} </h2>) }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
