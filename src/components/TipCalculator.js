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
        const tip = (Number(billAmount) * Number(service)) / Number(people);
        console.log(tip)
        this.setState({totalTip: tip})

    }
  render() {
      const {billAmount, service, people, totalTip} = this.state;
    return (
        <>
        <Card text='light' bg='dark' style={{ width: '18rem' }} className='mb-2 m-auto mt-5 pt-4 pb-4' >
      <Card.Title>Tip Calculator</Card.Title>
      <Card.Body>
        <Card.Text>How much was your bill?</Card.Text>
        <div className='flex'>
        <p>$</p><Input handleInput={(e)=>this.setState({billAmount: e})} value={this.billAmount} placeholder='Bill Amount' className='ms-5'/>
        </div>
        <Select handleSelect={(e)=>this.setState({service: e})} value={this.service} />
        <Card.Text>How many people are sharing the bill?</Card.Text>
        <div className='flex'>
        <Input handleInput={(e)=>this.setState({people: e})} value={this.people} placeholder='Number of People' /><p> people</p>
        </div>
        <Button onClick={this.handleCalculate} variant='primary' className='m-2'>CALCULATE</Button>
        <div><strong>{totalTip}</strong></div>
      </Card.Body>
      </Card>
      </>
    )
  }
}

export default TipCalculator