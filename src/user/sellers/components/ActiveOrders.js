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

const ActiveOrders = () => {
 
    const activeordersCategorie = ["Image", "Name", "Qty", "Total Price", "Delivery Time", "Buyer Name", "Delevery Details"];
    const activeorders = [
        { id: 0,
           image:
            img2, name: "Gemgem", qty: 3, totalPrice: "£ 10", deliveryTime: "3 Days", buyerName: "John Smith", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
        { id: 1, image: img3, name: "Rotario", qty: 2, totalPrice: "£ 20", deliveryTime: "2 Days", buyerName: "Albert Smith", deliveryDetails: "898 Overlay Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
        { id: 2, image: img4, name: "CaraShip Asim", qty: 5, totalPrice: "£ 50", deliveryTime: "3 Days", buyerName: "Cathrina Sumo", deliveryDetails: "497 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
        { id: 3, image: img5, name: "Dolor Sing", qty: 11, totalPrice: "£ 180", deliveryTime: "2 Days", buyerName: "Peter awai", deliveryDetails: "002 Street Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
        { id: 4, image: img6, name: "Fraikd tomato", qty: 1, totalPrice: "£ 35", deliveryTime: "1 Days", buyerName: "Emmanuel Corcodia", deliveryDetails: "777 Evergreen Rd. Roseville, CA 96542", align: 'right',  minWidth: 170,},
        
    ]

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
        {
          id: 'population',
          label: 'Population',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'size',
          label: 'Size\u00a0(km\u00b2)',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'density',
          label: 'Density',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toFixed(2),
        },
      ];
      
      function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
      }
      
      const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767),
      ];
      
      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
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

    return ( 
        <React.Fragment>
            <Row><h2>ACTIVE ORDERS</h2></Row>
            <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {activeordersCategorie.map((column, key) => (
                <TableCell
                 id={key}
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
                        <img src={row.image} alt={row.name} width={50} height={50} />
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
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