import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Counter from './Counter.jsx'
import Clock from './Clock.jsx'
import CountDown from './CountDown.jsx'
import UseStateTest from './UseStateTest.jsx'
import Input from './Input.jsx'
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import dataContext, { data } from "./data/DataContext"
import UseContext from "./UseContext.jsx"






    ReactDOM.render( 
      
      <div>
      <dataContext.Provider value={data}>
        <Counter />
        
        <Clock />

        <CountDown />    

        <UseStateTest />
        <Input />
        <UseEffect />
        <UseRef />
        <UseContext />
      </dataContext.Provider>
     
      </div>


   ,document.getElementById('root'))

   

 