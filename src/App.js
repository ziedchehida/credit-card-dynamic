import React, { Component } from 'react';
import './App.css';
import Card from './card'
import Head from './head'
import User from './user'
import Master from './master'
import Form from './formnumber'
import Formdate from './formdate'
import Formname from './formname'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      value1:'',
      value2:'',
      value3:''
    };
  }

  numbervalide=(x)=>{
this.setState({value1:x})
  }

  datevalide=(y)=>{
this.setState({value2:y})}

  namevalide=(z)=>{
  this.setState({value3:z})
}

  render() {
    return (<div className='App'>
       <Card />
      <Head />
      <User
      nubervalid={this.state.value1}
      datenumber={this.state.value2}
      namevalid={this.state.value3}
      />
      <Master />
      <Form numbercard={(x)=>this.numbervalide(x)}/>
      <Formdate datecard={(y)=>this.datevalide(y)} />
      <Formname namecard={(z)=>this.namevalide(z)} />
  
    </div>
      
    );
  }
}


export default App;
