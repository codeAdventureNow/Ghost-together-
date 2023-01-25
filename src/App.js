import './App.css';
import { useState, useEffect } from 'react';

const URL = `https://api.github.com/users/d-pagey`;

function App() {
  const [bio, setBio] = useState('');
  const [login, setLogin] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setBio(json.bio);
        setLogin(json.login);
        setLocation(json.location);
      });
    };
    fetchData();
  });

  return (
    <div className='App'>
      <div>{bio}</div>
      <div>{login}</div>
      <div>{location}</div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=ZRFwuGpiLl4
