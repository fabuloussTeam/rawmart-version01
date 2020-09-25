import React, { Component } from 'react';
import { TextField, Checkbox, FormControlLabel, Icon, Input, TextareaAutosize,   } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {RadioGroup, Radio} from '@material-ui/core';


class StoreDetails extends Component {
    state = { 
     
        storename: "",
        storeaddress: "",
        storephonenumber: "",
        storecompanyregistrationnumber: "",
        uploadsfacerf: "",
        otherdoc: "",
        bankname: "",
        accountNumber: "",
        sortcode: "",
        labelPrint: "",
    };

    handleChange(textfieldValue){
        console.log(textfieldValue);
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
        alert("back button");
    }

    confirm = e =>{
        e.preventDefault();
        this.props.nextStep();
        alert("confirm button");
    }

    render() { 
        return ( 
            <div className="seller-detail-store container">
               <span>Enter your personal information below</span> 
               <h3>Store Details</h3>
               <form className="" noValidate autoComplete="off">
                    <TextField className="form-field-item" onChange={this.handleChange('storename')} hintText="Store name" id="outlined-basic" label="Store name"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Store address" id="outlined-basic" label="Store address"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Store Phone Number" id="outlined-basic" label="Store Phone Number"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Store Company Registration Number" id="outlined-basic" label="Store Company Registration Number"  variant="outlined" required  /> <br/>
                    <div className="form-field-item" id="doc-attachment">
                         <span>Upload SFA Cerf <Input type="file" /></span>
                         <span>Other doc.(if avialable) <Input type="file" /></span>
                    </div>    
                    <div className="">
                        <span>About the store</span>
                        <TextareaAutosize  rowsMax={5} aria-label="empty textarea" placeholder="Empty" />
                    </div>
                    <h3>Bank Details</h3>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Bank name" id="outlined-basic" label="Bank name"  variant="outlined" required /><br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Account number" id="outlined-basic" label="Confirm Password" type="number" variant="outlined" required /><br/>
                    <TextField className="form-field-item" /*onChange={handleChange}*/ hintText="Sort Code" id="outlined-basic" label="Sort Code"  variant="outlined" required /><br/>
                    <div>
                        <span>Do you want a label print to £</span>
                        <RadioGroup>
                          <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </div>
                    <Button className="submit-button-sign-up" onClick={this.back} variant="contained" color="primary">BACK</Button> 
                    <Button className="submit-button-sign-up" onClick={this.confirm} variant="contained" color="primary">SIGN UP</Button> 
                </form>
            </div>
         );
    }
}
 
export default StoreDetails;