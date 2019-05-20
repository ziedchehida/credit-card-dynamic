import React, { Component } from 'react';
import './form.css'
class Formname extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyname:''
         
        };
    }
    handelchange=(e)=>{
        this.setState({keyname:e.target.value},()=> this.props.namecard(this.state.keyname))
        
    }

    render() {
        return (
            <div className='input'>
           
         <h3 className='input-title' > Card Holder </h3>
         <input
         maxLength='20'
         type='text'
         className="name"
         onChange={this.handelchange}
        />

       </div>
        );
    }
}

export default Formname;