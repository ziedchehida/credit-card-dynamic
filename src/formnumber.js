import React, { Component } from 'react';
import './form.css'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
         
        };
    }
    handelchange=(e)=>{
        this.setState({keyword:e.target.value},()=>this.props.numbercard(this.state.keyword))
        
    }

    render() {
        return (
            <div className='input'>

            <h3 className='input-title'> Card Number </h3>
         <input
          type="number"
          max="16"
            className="number"
            onChange={this.handelchange} 
         />
         

       </div>
        );
    }
}

export default Form;