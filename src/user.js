import React, { Component } from 'react';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    case = nubervalid => {
        nubervalid = nubervalid.toString()
        
        let resultStr = ''
       
        for(let i =0; i < 16; i += 4) {
          resultStr += nubervalid.slice(i, i + 4) + ' '
        }
        return resultStr.trim()
      }

    datevalide =datenumber=> {
        datenumber= datenumber.toString()
        console.log(datenumber)
        return ( datenumber.slice(0, 2) + '/' + datenumber.slice(2))
    }
    
    
    render() {
        const {nubervalid}=this.props
        const {datenumber}=this.props
        const {namevalid}=this.props
          console.log(datenumber)
        return (
            <div>
                <div className='Serial'>
                    <h1>{this.case(nubervalid)}</h1>
                </div>
                <div className='validation'>
                     <div className='Numb'> <h2> 1312 </h2> </div>
                     <div className='Valid'><h3> Valid </h3></div>
                     <div className='Valid-date'>
                     <h3> {this.datevalide(datenumber)} </h3>
                     </div>
                </div>
                <div>
                   <h2 className='Nom'> {namevalid.toUpperCase()} </h2> 
                </div>
            </div>
            
        );
    }
}

export default User;