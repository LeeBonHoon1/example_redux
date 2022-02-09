import React, {useState} from 'react'
import "./App.css"
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux'

const initialState = {
  number : 1,
  diff: 1
}

const reducer = (state =initialState, action) => {
  switch(action.type) {
    case "PLUS": 
      return {
        ...state,
        number : state.number+ state.diff
      }
    case "MINUS":
      return {
        ...state,
        number : state.number - state.diff
      }
    
    default: return state 
  }
}

const store = createStore(reducer)


function App() {


  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1() {
  return(
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  )
}

function Left2() {
  return(
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  )
}

function Left3() {
  const number = useSelector((state) => state.number)
  return(
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  )
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  )
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  )
}

function Right3() {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={() => {dispatch({type : "PLUS"})}}>Left3+</button>
      <button onClick={() => {dispatch({type : "MINUS"})}}>Left3-</button>
    </div>
  )
}

export default App;