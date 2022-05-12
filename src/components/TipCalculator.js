import {Card,Button} from 'react-bootstrap'
import React, { Component } from 'react'
import Input from './Input';
import Select from './Select';
import "bootstrap/dist/css/bootstrap.min.css";

export class TipCalculator extends Component {
    constructor(){
        super();
        this.state={
            billAmount:0,
            people:0,
            select:'',
            totalTip:0
        }
    }
    handleCalculate=()=>{
        
    }
  render() {
    return (
        <>
        <Card text='light' bg='dark' style={{ width: '18rem' }}className='mb-2 m-auto'>
      <Card.Header>Tip Calculator</Card.Header>
      <Card.Body>
        <Card.Text style={{fontSize:'15px'}}>How much was your bill?</Card.Text>
        <div className='flex'>
        <p>$ </p><Input placeholder='Bill Amount' className='ms-5'/>
        </div>
        <Select />
        <Card.Text style={{fontSize:'15px'}}>How many people are sharing the bill?</Card.Text>
        <div className='flex'>
        <Input placeholder='Number of People' /><p> people</p>
        </div>
        <Button onClick={this.handleCalculate} variant='primary' className='m-2'>CALCULATE</Button>
      </Card.Body>
      </Card>
      </>
    )
  }
}

export default TipCalculator