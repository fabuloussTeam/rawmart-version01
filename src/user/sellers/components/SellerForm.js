import React, { Component } from 'react';
import FormSellerDetails from './FormSellerDetails';
import StoreDetails from './StoreDetails';
import Confirm from './Confirm';

class SellerForm extends Component {
   /* constructor(props) {
        super(props);
        this.
    }*/

    state = { 
        step: 1,
        firstname: '',
        lastname: '',
        preferedUsername: '',
        email: '',
        password: '',
        confirmPassword: ''
     }

    // Go back to prev step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    /* { step } = this.state;*/


    render() { 
            const { firstName, lastName, preferedUsername, email, password, confirmPassword } = this.state;

       const  values = { firstName, lastName, preferedUsername, email, password, confirmPassword };
           
        switch(this.state.step){
                case 1:
                    return(
                        <FormSellerDetails 
                          nextStep={this.nextStep}
                          handleChange={this.handleChange}
                          values={values}
                        />
                    );
                case 2: 
                return (
                    <StoreDetails 
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}  
                      handleChange={this.handleChange}
                    />
                );
                case 3:
                return(
                    <Confirm />
                );            
            }
    }
}
 
export default SellerForm;