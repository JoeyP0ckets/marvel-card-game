import React from 'react';
import './App.css';
import MutantNavbar from './components/Navbar'
import MutantSelect from './containers/MutantSelect'
import TeamContainer from './containers/TeamContainer';
import Hand from './containers/Hand'
import {connect} from "react-redux"

function App(props) {
  return (
    <div className="App">
      <MutantNavbar/>
      {props.handSelected ? <Hand/> :
        <>
        <MutantSelect/>
        <TeamContainer/>
        </>
      }
    </div>
  );
}
const msp = state => {
  return {
    handSelected: state.handSelected
  }
}
export default connect(msp)(App);
