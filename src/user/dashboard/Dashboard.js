import React, { Component } from 'react'; 
import { TopBarNav, ProfileNav, MainNav } from "../../shared/components/Navigation/MainNavigation";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Dashboard.css';
import { SimpleBreadcrumbs } from '../../shared/components/widgets/Breadcrumbs';
import CardDashboard from '../../shared/components/widgets/Card';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MessageIcon from '@material-ui/icons/Message';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Row } from 'react-bootstrap';
import ActiveOrders from '../sellers/components/ActiveOrders';
import Reviews from '../sellers/components/Reviews';
import img2 from '../../images/seller-images/img2.jpg'
import img3 from '../../images/seller-images/img3.jpg';
import img4 from '../../images/seller-images/img4.jpg';
import img5 from '../../images/seller-images/img5.jpg';
import img6 from '../../images/seller-images/img6.jpg';
import review1 from '../../images/seller-images/review1.jpg';
import review2 from '../../images/seller-images/review2.jpg';
import review3 from '../../images/seller-images/review3.jpg';


const activeordersCategorie = ["Image", "Name", "Qty", "Total Price", "Delivery Time", "Buyer Name", "Delevery Details"];
const activeorders = [
    { id: 0, image: img2, name: "Gemgem", qty: 3, totalPrice: "£ 10", deliveryTime: "3 Days", buyerName: "John Smith", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 1, image: img3, name: "Rotario", qty: 2, totalPrice: "£ 20", deliveryTime: "2 Days", buyerName: "Albert Smith", deliveryDetails: "898 Overlay Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 2, image: img4, name: "CaraShip Asim", qty: 5, totalPrice: "£ 50", deliveryTime: "3 Days", buyerName: "Cathrina Sumo", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 3, image: img5, name: "Dolor Sing", qty: 11, totalPrice: "£ 180", deliveryTime: "2 Days", buyerName: "Peter awai", deliveryDetails: "002 Street Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 4, image: img6, name: "Fraikd tomato", qty: 1, totalPrice: "£ 35", deliveryTime: "1 Days", buyerName: "Emmanuel Corcodia", deliveryDetails: "777 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 5, image: img2, name: "Gemgem", qty: 3, totalPrice: "£ 10", deliveryTime: "3 Days", buyerName: "John Smith", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 6, image: img3, name: "Rotario", qty: 2, totalPrice: "£ 20", deliveryTime: "2 Days", buyerName: "Albert Smith", deliveryDetails: "898 Overlay Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 7, image: img4, name: "CaraShip Asim", qty: 5, totalPrice: "£ 50", deliveryTime: "3 Days", buyerName: "Cathrina Sumo", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 8, image: img5, name: "Dolor Sing", qty: 11, totalPrice: "£ 180", deliveryTime: "2 Days", buyerName: "Peter awai", deliveryDetails: "002 Street Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 9, image: img6, name: "Fraikd tomato", qty: 1, totalPrice: "£ 35", deliveryTime: "1 Days", buyerName: "Emmanuel Corcodia", deliveryDetails: "777 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 10, image: img2, name: "Gemgem", qty: 3, totalPrice: "£ 10", deliveryTime: "3 Days", buyerName: "John Smith", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 11, image: img3, name: "Rotario", qty: 2, totalPrice: "£ 20", deliveryTime: "2 Days", buyerName: "Albert Smith", deliveryDetails: "898 Overlay Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 12, image: img4, name: "CaraShip Asim", qty: 5, totalPrice: "£ 50", deliveryTime: "3 Days", buyerName: "Cathrina Sumo", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 13, image: img5, name: "Dolor Sing", qty: 11, totalPrice: "£ 180", deliveryTime: "2 Days", buyerName: "Peter awai", deliveryDetails: "002 Street Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
    { id: 14, image: img6, name: "Fraikd tomato", qty: 1, totalPrice: "£ 35", deliveryTime: "1 Days", buyerName: "Emmanuel Corcodia", deliveryDetails: "777 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
];

const reviewsList = [
  {
    id: 1, 
  clientName: "Ferdinand Concorde", 
  clientImg: review1, 
  comment: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  rating: 3,
  date: "3 days ago"
  },
  {
  id: 2, 
  clientName: "Obi Tome", 
  clientImg: review2, 
  comment: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  rating: 4,
  date: "1 day ago"
  },
  {
    id: 3, 
    clientName: "Adama Concorde", 
    clientImg: review3, 
    comment: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 0,
    date: "5 Minutes ago"
  },
];



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      /*padding: theme.spacing(2),*/
      textAlign: 'center',
     /* color: theme.palette.text.secondary,*/
    },
  }));


export const Dashboard = () => {

    const classes = useStyles();

    return ( 
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#ffff' }} />
        <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <TopBarNav />
                  </Paper>
                </Grid>
                <Grid item xs={12} className="clr-both">
                  <Paper className={classes.paper}>
                    <ProfileNav />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <MainNav />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <SimpleBreadcrumbs />
                  </Paper>
                 </Grid>
              </Grid>
              <Grid item xs={6} sm={2}>
               <Paper className={classes.paper}>Column Left or aside left</Paper>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <MenuList className="card-dashboard-container" md={12}>
                    <MenuItem className="card-item" md={4}>
                      <Paper className={classes.paper}>
                        <CardDashboard
                          backgroundcolor="#006666" 
                          title="Personal Balance" 
                          cardAmount="00.0"
                          icon={<AccountBalanceWalletIcon style={{ fontSize: 50, color: "#ffffff", borderRadius: '15px' }} />}
                          width={200}
                        />
                      </Paper>
                    </MenuItem>
                    <MenuItem className="card-item" md={4}>
                      <Paper className={classes.paper}>
                        <CardDashboard
                          backgroundcolor="#3333ff" 
                          title="Earning this mounth" 
                          cardAmount={1500} 
                          icon={<MessageIcon style={{ fontSize: 50, color: "#ffffff", borderRadius: '15px' }} />}
                          width={200}
                        />
                      </Paper>
                    </MenuItem>
                  </MenuList>
                  <div className="Animation-resume">
                      <Row>Animation Here</Row>
                  </div>
                  <Grid container sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={9} md={9} lg={9}>
                      <ActiveOrders activeorders={activeorders} activeordersCategorie={activeordersCategorie} />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Reviews reviewsList={reviewsList} />
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </div>
      </Container>
    </React.Fragment>
        
     );
}
 
