import {Card,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import Input from './Input';
import Select from './Select';
import "bootstrap/dist/css/bootstrap.min.css";

export class TipCalculator extends Component {
    constructor(){
        super();
        this.state={
            billAmount:'',
            people:'',
            service:'',
            totalTip:0
        }
    }
    handleCalculate=()=>{
        const {billAmount, service, people} = this.state;
        if(!billAmount || !service || !people){
            alert('Please enter values!')
        }
        const tip = Math.ceil((billAmount * service) / people);
        this.setState({totalTip: tip})
        this.setState({billAmount:'', service:'',people:''})

    }
  render() {
      const {billAmount, service, people, totalTip} = this.state;
    return (
        <>
        <Card text='light' bg='secondary' style={{ width: '19rem' }} className='m-auto mt-5 pt-4 pb-4' >
            <h3>Tip Calculator</h3>
            <Card.Body>
                <h6>How much was your bill?</h6>
                 <div className='flex'>
                    <p>$</p><Input handleInput={(e)=>this.setState({billAmount: e})} value={billAmount} placeholder='Bill Amount' className='ms-5'/>
                </div>
                <Select handleSelect={(e)=>this.setState({service: e})} value={this.state.service} />
                <h6>How many people are sharing the bill?</h6>
                <div className='flex'>
                    <Input handleInput={(e)=>this.setState({people: e})} value={people} placeholder='Number of People' className='ms-5'/><p> people</p>
                </div>
                <Button onClick={this.handleCalculate} variant='primary' className='m-3'>Calculate</Button>
                <div className={totalTip>0 ? 'display' : 'hide'}>
                    <p>TIP AMOUNT</p>
                    <h5><strong>${totalTip}</strong></h5>
                    <p>each</p>
                </div>
            </Card.Body>
        </Card>
      </>
    )
  }
}

export default TipCalculator