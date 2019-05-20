import React, { Component } from 'react';
import Earth from './earth.jpg'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        return (
            <div>
                <img src={Earth} className='card'/>
            </div>
        );
    }
}
export default Card;
