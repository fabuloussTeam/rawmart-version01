import React, { useState } from 'react'; 


function signInSignUpNavbarSeller(){
    return(
        <>
          <nav className="signInSignUpSeller-navbar">
              <div className="ignInSignUpSeller-Container">
                <link to="/login" className="navbar">Login</link>
                <link to="/signup" className="navbar">Sign up</link>
              </div>
          </nav>
        </>
    )
}

function PrimaryNavbar() {
    return(
        <>
          <nav className="primary-navbar">
              <div className="primaryNavbar-Container">
                <link to="/" className="navbar"> </link>
              </div>
          </nav>
        </>
    )
}

//export default PrimaryNavbar;