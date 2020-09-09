import React from 'react';
import './App.css';
import MutantNavbar from './components/Navbar'
import MutantSelect from './containers/MutantSelect'
import TeamContainer from './containers/TeamContainer';

function App() {
  return (
    <div className="App">
      <MutantNavbar/>
      <MutantSelect/>
      <TeamContainer/>
    </div>
  );
}

export default App;
