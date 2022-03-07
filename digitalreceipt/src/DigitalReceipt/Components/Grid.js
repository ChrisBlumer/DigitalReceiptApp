import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { dollarFormatter } from '../Helpers/Variables';

import '../CSS/grid.css'

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

// console.log(row)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.VendorDetails.name}</TableCell>
        <TableCell align="right">{row.RecieptDetails.RecieptID}</TableCell>
        <TableCell align="right">{dollarFormatter.format(row.RecieptDetails.total)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {recieptHeader(row)}
              <Typography variant="h6" gutterBottom component="div">
                Line Items
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='header'>Item Code</TableCell>
                    <TableCell className='header'>Name</TableCell>
                    <TableCell className='header' align="right">Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.RecieptDetails.lineItems.map((lineItem) => (
                    <TableRow key={lineItem.itemcode}>
                      <TableCell component="th" scope="row"> {lineItem.itemcode} </TableCell>
                      <TableCell> {lineItem.name} </TableCell>
                      <TableCell align="right"> {dollarFormatter.format(lineItem.price)} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {recieptFooter(row)}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const tableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell className='header'>Vendor Name</TableCell>
        <TableCell className='header' align="right">Reciept ID</TableCell>
        <TableCell className='header' align="right">Total ($)</TableCell>
      </TableRow>
    </TableHead>
  )}

  const recieptHeader = (data) => {
  console.log(data)
  var address = `${data.VendorDetails.address} ${data.VendorDetails.city}, ${data.VendorDetails.state} ${data.VendorDetails.zip}`
    return(
      <div>
        <p><strong>Address:</strong> {address} </p>
        <p><strong>Phone Number:</strong> {data.VendorDetails.phone}</p>
        <p><strong>Transaction Date:</strong> {data.RecieptDetails.date} </p>
      </div>
    )
  }

  const recieptFooter = (data) => {
    return(
      <div>
        <p> {data.VendorAdtnlDetails.message}</p>
        <p> {data.VendorAdtnlDetails.website} </p>
      </div>
    )
  }

export default function CollapsibleTable({data}) {
console.log(data)
  return (
    <TableContainer component={Paper} style={{backgroundColor:'#778899'}}>
      <Table aria-label="collapsible table">
        {tableHeader()}
        <TableBody>
          {data.map((row) => (
            <Row key={row.RecieptDetails.RecieptID} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}