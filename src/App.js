import React from 'react';
import Lottery from './Lottery';
import './App.css';


function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title='Mini Daily (1/10)' maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
