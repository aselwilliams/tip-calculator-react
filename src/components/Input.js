import React, { Component } from 'react'

export class Input extends Component {
  render() {
    return (
      <div>
          <input type='number' onChange={(e)=>this.handlerChange(e.target.value)}/>
      </div>
    )
  }
}

export default Input