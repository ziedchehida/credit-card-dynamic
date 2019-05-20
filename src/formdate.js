import React, { Component } from 'react';
import './form.css'
class Formdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          keydate:''
         
        };
    }

    handelchange=(e)=>{
        this.setState({keydate:e.target.value},()=> this.props.datecard(this.state.keydate))
       
    }

    render() {
        return (
            <div className='input'>

        <h3 className='input-title' > Valid Date</h3>
        <input
        maxlength="4"
        className="date"
        onChange={this.handelchange} 
       />

       </div>
        );
    }
}

export default Formdate;