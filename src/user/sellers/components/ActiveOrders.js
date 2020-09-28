import React from 'react';
import { Row } from 'react-bootstrap';
import './ActiveOrders.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import img2 from '../../../images/seller-images/img2.jpg';
import img3 from '../../../images/seller-images/img3.jpg';
import img4 from '../../../images/seller-images/img4.jpg';
import img5 from '../../../images/seller-images/img5.jpg';
import img6 from '../../../images/seller-images/img6.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';


const ActiveOrders = (props) => {
 
   

      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 'auto',
        },
      });

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const { activeorders, activeordersCategorie } = props;

    return ( 
        <React.Fragment>
            <Row><h2>ACTIVE ORDERS</h2></Row>
            <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table  aria-label="sticky table">
          <TableHead>
            <TableRow>
              {activeordersCategorie.map((column, key) => (
                <TableCell
                 id={key}
                 style={{fontWeight:'bold'}}
                >
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {activeorders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                       <TableCell key={row.id} align={row.align}>
                        <img src={row.image} alt={row.name} width={80} height={80} style={{borderRadius: 10}} />
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                          <h5>{row.name}</h5>
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                         {row.qty}
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                         {row.totalPrice}
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                         {row.deliveryTime}
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                         {row.buyerName}
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                         {row.deliveryDetails}
                       </TableCell>
                       <TableCell key={row.id} align={row.align}>
                          <Button variant="contained" color="primary" href="#contained-buttons">
                            <ArrowForwardIcon style={{ color: "#ffffff", BorderColor: "#ff0066" }} />
                          </Button>
                       </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={activeorders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
        </React.Fragment>
     );
}
 
export default ActiveOrders;