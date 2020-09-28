import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Card.css';


const useStyles = makeStyles({
    root: {
      border: '1px solid red',
      borderRadius: '10px',
     
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 12,
    },
    pos: {
      marginBottom: 12,
      fontWeight: 'bold',
    },
  });

const CardDashboard = (props) => {

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [titleCard, setTitleCard] = React.useState('Personal Balance');
  const [amountCard, setAmountCard] = React.useState('00.0');
  const [iconCard, setIconCard] = React.useState('');
  const [bgColor, setBgColor] = React.useState('#006666');
    
  const { backgroundcolor, title, cardAmount, icon, width } = props  
   

    return ( 
    <Card className={classes.root} style={{  backgroundColor: backgroundcolor, width: width }}>
      <CardContent className="card-content">
      <Typography variant="body2" component="p">
         {icon}
        </Typography>
        <Typography className={classes.pos} style={{ color: "#ffffff", fontSize: '12px' }} >
            {title}
        </Typography>
        <Row>
        <Typography variant="h5" component="h2" style={{ color: "#ffffff" }}>
          £{cardAmount} 
        </Typography>
        </Row>
      </CardContent>
       <Button  className="detail-button" >
               <ArrowForwardIcon style={{ color: "#ffffff", BorderColor: "#ff0066" }} />
           </Button>
     
    </Card>
     );
}
 
export default CardDashboard;