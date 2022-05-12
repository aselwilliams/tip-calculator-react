import {Component} from 'react'
import './App.css';
import TipCalculator from './components/TipCalculator'

class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className='App'>
        <TipCalculator />
      </div>
    )
  }
}
export default App;
