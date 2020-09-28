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




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
     /* padding: theme.spacing(2),*/
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
              <Grid item xs={6} sm={3}>
               <Paper className={classes.paper}>Column Left or aside left</Paper>
                </Grid>
                <Grid item xs={6} sm={9}>
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
                     
                </Grid>
            </Grid>
          </div>
      </Container>
    </React.Fragment>
        
     );
}
 
