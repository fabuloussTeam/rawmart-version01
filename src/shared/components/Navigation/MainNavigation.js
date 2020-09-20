import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const loginCallBack = () => console.log("Vous avez cliqeuz su le bouton de login");
const signupCallBack = () => console.log("Vous avez cliqeuz su le bouton de Sign up");




export const SignInSignUpNavigationSeller = props => {

const [click, setClick] = useState(false);

    return(
        <nav>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <a href="">Login</a>
                </li>
                <li className="nav-item">
                <a href="">Sign up</a> 
                </li>
            </ul>
        </nav>
    )
}


export const MainNavigation = props => {
    return (
    <h1>MainNavigation</h1>
    );
};
 
