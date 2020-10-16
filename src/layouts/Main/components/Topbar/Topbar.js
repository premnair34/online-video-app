import React from 'react';
import { Link as RouterLink,withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar,Hidden, Button,Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import logo from './freecoding.png';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default
  },
  title: {
     flexGrow: 1,
     display: 'none',
     [theme.breakpoints.up('sm')]: {
       display: 'block',
     },
   },
  flexGrow: {
    flexGrow: 1
  }
}));
const Topbar = props => {
  const { className, onSidebarOpen, history } = props;
  const classes = useStyles();
  // const onLogout = event => {
  //   localStorage.clear();
  //    history.push('/sign-in');
  // } 

  const goEvents = event => {
     history.push('/events');
  } 
  return (
    <AppBar
      className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/" className={classes.flexGrow}>
            <img alt="Logo" width="150" src={logo}  />
        </RouterLink>
        <Button to={'/events'} color="primary" onClick={goEvents}>My Events</Button>
      </Toolbar>
    </AppBar>
  );
};
// <div className={classes.flexGrow}>
//   <RouterLink to="/">
//       Online Class
//   </RouterLink>
// </div>
// <Hidden lgUp>
//     <IconButton
//       color="inherit"
//       onClick={onSidebarOpen}
//     >
//       <MenuIcon />
//   </IconButton>
// </Hidden>
Topbar.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};
export default withRouter(Topbar);
