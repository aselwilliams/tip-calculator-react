import React, { Component } from 'react'

function Select({handleSelect, value}) {
  
    return (
     <select onChange={(e)=>this.handleSelect(e.target.value)} value={value}>
         <option value='0.3' >30% Outstanding</option>
         <option value='0.2' >20% Good</option>
         <option value='0.15' >15% It was OK </option>
         <option value='0.10' >10% Bad</option>
         <option value='0.5' >5% Terrible</option>
     </select>
    )
}

export default Select