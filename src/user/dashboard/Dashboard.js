import React, { Component } from 'react'; 
import { TopBarNav,  } from "../../shared/components/Navigation/MainNavigation";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
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
                  <Paper className={classes.paper}>Top Menu</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Profile Menue</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Main Menu</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>Breacrumb</Paper>
                 </Grid>
              </Grid>
              <Grid item xs={6} sm={3}>
               <Paper className={classes.paper}>Column Left or aside left</Paper>
                </Grid>
                <Grid item xs={6} sm={9}>
                  <Paper className={classes.paper}>Main shop</Paper>
                </Grid>
            </Grid>
          </div>
      </Container>
    </React.Fragment>
        
     );
}
 
