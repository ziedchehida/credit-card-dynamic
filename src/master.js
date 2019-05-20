import React, { Component } from 'react';
import Visa from './Visa.png'
import mastercard from './mastercard.png'

class master extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <div className='EU'>
                <img src={mastercard} className='master'/>
                <img src={Visa} className='visa'/>
            </div>
            
        );
    }
}

export default master;