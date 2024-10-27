import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetItemsQuery } from './redux';


function App() {

  const {data: items, isLoading} = useGetItemsQuery(2)

    if(isLoading) return <h1>Loading...</h1>



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>Hello world</p>

      <ul>
        {items && items.map(({title}, i) =>(
          <li key={i}>{title}</li>
        ))}
      </ul>
       
  
      
       
      </header>
    </div>
  );
}

export default App;
