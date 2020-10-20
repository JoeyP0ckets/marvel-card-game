import React from 'react';
import './App.css';
import MutantNavbar from './components/Navbar'
import MutantSelect from './containers/MutantSelect'
import Hand from './containers/Hand'
import GameBoard from './containers/GameBoard'
import Welcome from './containers/Welcome'
import {connect} from "react-redux"


function App(props) {

  const renderSelect = () => {
    if (props.handSelected) {
      return <Hand/>
    } else {
      return <MutantSelect/>
    }
  }
  return (
    <div className="App">
      {/* {props.welcome ? <Welcome/> : render} */}
      <MutantNavbar/> 
      {props.gameStart ? <GameBoard/> : renderSelect() }
    </div>
  );
}
const msp = state => {
  return {
    handSelected: state.handSelected,
    gameStart: state.gameStart,
    welcome: state.welcome
  }
}
export default connect(msp)(App);
