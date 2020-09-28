import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './Breadcrumbs.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const SimpleBreadcrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumb container">
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className="link-container" >
        Home
      </Link>
      <Typography color="textPrimary">Dashboard</Typography>
    </Breadcrumbs>
  );
}