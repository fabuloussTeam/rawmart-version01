import React, {Component} from 'react';
import {SignInSignUpNavigationSeller} from '../../shared/components/Navigation/MainNavigation';
import { Row } from 'react-bootstrap';
import imgsellerprofile from '../../images/seller-images/login-profile-seller.jpg';
import Button from '@material-ui/core/Button';
import { TextField, Checkbox, FormControlLabel, Icon } from '@material-ui/core';
import './Buyer.css';

const forgotpasswordCallback = () => {console.log("Forgot paswword");}

class Buyer extends Component {

    state = { 
        login: false
     }

    render() { 
        return ( 
           this.state.login ?      
            <div className="container-seller">
                <Row className="nav-bar-seller">
                <SignInSignUpNavigationSeller  />
                </Row>
                <ul className="detail-login-seller">
                <li className="detail-login-seller-item"><div className="img-profile"><img src={imgsellerprofile} /></div></li>
                <li className="detail-login-seller-item title-first">Wellcome back</li>
                <li className="detail-login-seller-item title-last">Buyer</li>
                <li className="detail-login-seller-item title-description"><span>Enter your details to sign in or continuer as a guest </span></li>
                <li className="detail-login-seller-item form">
                    <form className="" noValidate autoComplete="off">
                    <TextField className="form-field-item" id="outlined-basic" label="Username" label="Username" variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Password" type="password" variant="outlined" required /><br/>
                    <Row className="forgot-password"><a href="" onClick={forgotpasswordCallback}>Forgot password</a> 
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Remember me" className="remember-me" />
                    <span className = "clear_b"></span>
                    </Row>
                    <Row className="forgot-password"><Button className="submit-button" variant="contained" color="primary"> ->
                    </Button> </Row>
                    </form>
                </li>
                </ul>
            </div>
             :  <div>
              <Row className="nav-bar-seller">
                <SignInSignUpNavigationSeller  />
                </Row>
                <ul className="detail-login-seller">
                <li className="detail-login-seller-item"><div className="img-profile"><img src={imgsellerprofile} /></div></li>
                <li className="detail-login-seller-item title-first">WHello</li>
                <li className="detail-login-seller-item title-last">New User</li>
                <li className="detail-login-seller-item title-description"><span>Enter your personal information  below</span></li>
                
                <li className="detail-login-seller-item form">
                    <form className="" noValidate autoComplete="off">
                    <TextField className="form-field-item" id="outlined-basic" label="Firs name"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Last name"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Prefered Username"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Phone number"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Email"  variant="outlined" required  /> <br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Password" type="password" variant="outlined" required /><br/>
                    <TextField className="form-field-item" id="outlined-basic" label="Confirm Password" type="password" variant="outlined" required /><br/>
                    <FormControlLabel className="condition-agreement" control={<Checkbox name="checkedC" />} label="I have read the terms & Conditions. I accept the Terms and Conditions " className="remember-me" />
                    <Button className="submit-button-sign-up" variant="contained" color="primary">Sign up
                    </Button> 
                    </form>
                </li>

                </ul>
           </div> 
         );
    }
}

export default Buyer;