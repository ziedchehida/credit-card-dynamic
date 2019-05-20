import React, { Component } from 'react';
import Puce from './puce.jpg'
import './App.css'

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <div>
            <div className='title'>
                <h1> CREDIT CARD </h1>
            </div>
            <div >
                <img src={Puce} className='Puce'/>
            </div>
            </div>
        );
    }
}

export default Head;