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
import MenuList from '@material-ui/core/MenuList';
import NativeSelect from '@material-ui/core/NativeSelect';
import imgsellerprofile from '../../../images/seller-images/login-profile-seller.jpg';


// General style

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

    /** Select currency */
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const [open, setOpen] = React.useState(false);

    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div className="topbarnav-container">
            <MenuList className="top-bar nav" md={6}>
                <MenuItem className="top-bar-item" onClick={handleClose}>
                <FormControl>
                    <NativeSelect
                    defaultValue={currency}
                    onChange={handleChangeCurrency}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                    className="currencyList"
                    value={currency}
                    >
                    <option value={'eur'}>EUR</option>
                    <option value={'gbp'}>GBP</option>
                    <option value={'usd'}>USD</option>
                    </NativeSelect>
                </FormControl>
                </MenuItem>
                <MenuItem className="top-bar-item" onClick={handleClose}>My Account</MenuItem>
                <MenuItem className="top-bar-item" onClick={handleClose}>Privacy Policy</MenuItem>
                <MenuItem className="top-bar-item" onClick={handleClose}>Contact Support</MenuItem>
                <MenuItem className="top-bar-item" onClick={handleClose}>Logout</MenuItem>
            </MenuList>
        </div>
    );
};


export const ProfileNav = () => {

    const classes = useStyles();
    const [title, setTitle] = React.useState('Rawmart');
    const [cardAction, setCardAction] = React.useState('my-card');
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const handleChangeAction = (event) => {
        setCardAction(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


        return ( 
            <div className="profile-container">
              <div className="profile-nav-left">{((title != null) && (title !== "")) ? <h1 className="profile-nav-title">Rawmart</h1> : <a href=""><img src="" alt="IMG LOGO HERE" /></a>  }</div>
              <div className="profile-nav-right">
               <ul className="profile-nav-right-container">
                   <li className="profile-nav-right-container-item">
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="default"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <span className="">Switch to buyer mode</span>
                   </li>
                   <li className="profile-nav-right-container-item">
                       <ul>
                           <li><img className="profile-img" src={imgsellerprofile} alt="PROFILE IMG" /></li>
                           <li>
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="profile-controlled-open-select-label"
                                    id="profile-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={cardAction}
                                    onChange={handleChangeAction}
                                    defaultValue={(cardAction == "my-card") ? "00.0": cardAction}
                                >
                                <MenuItem value="my-card">My Card</MenuItem>
                                <MenuItem value="my-seller">My Seller</MenuItem>
                                <MenuItem value="withdrawal">Withdrawal</MenuItem>
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
 


export const MainNav = props => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <MenuList className="main-nav-container" md={6}>
          <MenuItem className="main-nav-item" onClick={handleClose}>Dashboard</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>Order</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>Earnings</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>Notifications</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>My Products</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>Profile</MenuItem>
          <MenuItem className="main-nav-item" onClick={handleClose}>
          <Paper component="form" className={classes.root} id="search-bar">
                <InputBase
                    className={classes.input}
                    placeholder="Search product or Client"
                    inputProps={{ 'aria-label': 'search Product' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
          </MenuItem>
        </MenuList>
    );
};
 
