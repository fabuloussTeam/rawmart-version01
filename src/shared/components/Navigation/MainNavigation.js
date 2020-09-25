import React, { Component } from 'react';
import './MainNavigation.css';



//const signupCallBack = () => console.log("Vous avez cliqeuz su le bouton de Sign up");

export class SignInSignUpNavigationBuyer extends Component {

    state = { isLoginBuyer: true }

    isloginbuyerscallback = (e) => {
        e.preventDefault(); // Let's stop this event.
       this.props.isloginbuyerscb();
      // alert("Is it stopped?");
       this.setState({
        isLoginBuyer: true
       });
    }

    issignubuyerscallback = (e) => {
        e.preventDefault(); // Let's stop this event.
       this.props.issignupbuyerscb();

       this.setState({
        isLoginBuyer: false
       });
    }
   

    render() { 
        return ( 
            <nav>
                <ul className={this.state.isLoginBuyer ? "nav-menu active-first" : "nav-menu active-last"}>
                    <li className="nav-item">
                      <a href="" onClick={this.isloginbuyerscallback}>Login</a>
                    </li>
                    <li className="nav-item">
                      <a href="" onClick={this.issignubuyerscallback}>Sign up</a> 
                    </li>
                </ul>
            </nav>    
         );
    }
}
 
export class SignInSignUpNavigationSeller extends Component {

    state = { isLoginSeller: true }

    isLoginSeller = (e) => {
        e.preventDefault();
        this.props.isloginsellerscb();
        this.setState({
            isLoginSeller: true
        });
    }

   isSignUpSeller = (e) => {
        e.preventDefault();
        this.props.issignupsellerscb();
        this.setState({
            isLoginSeller: false
        });
    }

    render() { 
        return ( 
            <nav>
                <ul className={this.state.isLoginSeller ? "nav-menu active-first" : "nav-menu active-last"}>
                    <li className="nav-item">
                        <a href="" onClick={this.isLoginSeller}>Login</a>
                    </li>
                    <li className="nav-item">
                    <a href="" onClick={this.isSignUpSeller}>Sign up</a> 
                    </li>
                </ul>
            </nav>
         );
    }
}
 




export const MainNavigation = props => {
    return (
    <h1>MainNavigation</h1>
    );
};
 
