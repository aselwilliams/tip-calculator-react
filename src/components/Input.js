import React, { Component } from 'react'

function Input({placeholder, handleInput,value}) {
  
    return (
      <div>
          <input value={value} type='number' onChange={(e)=>handleInput(e.target.value)}/>
      </div>
    )
  
}

export default Input