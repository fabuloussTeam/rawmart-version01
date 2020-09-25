import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel, Icon } from '@material-ui/core';
import Button from '@material-ui/core/Button';


class FormSellerDetails extends Component {
   
    state = {  }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    handleChange(textfieldValue){
        console.log(textfieldValue);
    }

    render() { 
        const { step } = this.state
        const { values, handleChange } = this.props; 

        return ( 
            <div className="seller-detail-information container">
               <span>Enter your personal information below</span> 
               <h3>Personal Details</h3>
               <form className="" noValidate autoComplete="off">
                    <TextField className="form-field-item" onChange={handleChange('firstName')} hintText="First name" id="outlined-basic" label="First name"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Last name" id="outlined-basic" label="Last name"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Username" id="outlined-basic" label="Prefered Username"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="email" id="outlined-basic" label="Email"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Password" id="outlined-basic" label="Password" type="password" variant="outlined" required /><br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Confirm Password" id="outlined-basic" label="Confirm Password" type="password" variant="outlined" required /><br/>
                    <Button className="submit-button-sign-up" onClick={this.continue} variant="contained" color="primary">Continue</Button> 
                </form>
            </div>
         );
    }
}
 
export default FormSellerDetails;