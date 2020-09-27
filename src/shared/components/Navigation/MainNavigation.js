import React, { Component } from 'react';
import './MainNavigation.css';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';


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
 

export const TopBarNav = props => {
    return (
        <nav>
            <ul className="top-bar nav">
                <li className="top-bar-item">
                  <a href="">EUR</a>
                </li>
                <li className="top-bar-item">
                  <a href="">My Account</a>
                </li>
                <li className="top-bar-item">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="top-bar-item">
                  <a href="">Contact Support</a>
                </li>
                <li className="top-bar-item">
                  <a href="">Logout</a>
                </li>
            </ul>
        </nav>    
    );
};


class ProfileNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            checkedA: true,
            checkedB: true,
            age: '',
            open: false

          }
    }

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    
 handleChangeAge = (event) => {
    this.setState({ age: event.target.value });
  };

   handleClose = () => {
    this.setState({
        open: false
    })
  };

  handleOpen = () => {
    this.setState(
        {
            open: true,
        }
    )
  };
     

    render() { 
        return ( 
            <div className="profile-container">
            <span className="profile-nav-left">{((this.state.title != null) && (this.state.title !== "")) ? <h1 className="profile-nav-title">Rawmart</h1> : <a href=""><img src="" alt="IMG LOGO HERE" /></a>  }</span>
            <div className="profile-nav-right">
               <ul>
                   <li>
                   <Switch
                       checked={this.state.checkedB}
                       onChange={this.handleChange}
                       color="primary"
                       name="checkedB"
                       inputProps={{ 'aria-label': 'primary checkbox' }}
                   />
                   </li>
                   <li>
                       <ul>
                           <li><img className="profile-img" src="" alt="PROFILE IMG" /></li>
                           <li>
                           <FormControl className="">
                               <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                               <Select
                               labelId="demo-controlled-open-select-label"
                               id="demo-controlled-open-select"
                               open={this.state.open}
                               onClose={this.handleClose}
                               onOpen={this.handleOpen}
                               value={this.state.age}
                               onChange={this.handleChangeAge}
                               >
                               <MenuItem value="">
                                   <em>None</em>
                               </MenuItem>
                               <MenuItem value={10}>Ten</MenuItem>
                               <MenuItem value={20}>Twenty</MenuItem>
                               <MenuItem value={30}>Thirty</MenuItem>
                               </Select>
                           </FormControl>
                           </li>
                       </ul>
                   </li>
               </ul>
            </div>
         </div>
         );
    }
}
 
export default ProfileNav;


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

export const MainNav = props => {
    const classes = useStyles();

    return (
    <nav>
        <ul className="main-nav-container">
            <li className="main-nav-item">
              <a href="">Dashboard</a>
            </li>
            <li className="main-nav-item">
              <a href="">Order</a>
            </li>
            <li className="main-nav-item">
              <a href="">Earnings</a>
            </li>
            <li className="main-nav-item">
              <a href="">Notifications</a>
            </li>
            <li className="main-nav-item">
              <a href="">My Products</a>
            </li>
            <li className="main-nav-item">
              <a href="">Profile</a>
            </li>
            <li className="main-nav-search-bar">
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search product or Client"
                    inputProps={{ 'aria-label': 'search Product' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            </li>
        </ul>
    </nav>    
    );
};
 
