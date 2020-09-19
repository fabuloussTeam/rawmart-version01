import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const loginCallBack = () => console.log("Vous avez cliqeuz su le bouton de login");
const signupCallBack = () => console.log("Vous avez cliqeuz su le bouton de Sign up");




export const SignInSignUpNavigation = props => {

const [click, setClick] = useState(false);

    return(
        <nav>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/login-seller" className="nav-links" onClick={loginCallBack}>Login</Link>
                </li>
                <li className="nav-item">
                   <Link to="/signup-seller" className="nav-links" onClick={signupCallBack}>Sign up</Link>
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
 
