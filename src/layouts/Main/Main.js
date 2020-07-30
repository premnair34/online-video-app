import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
// , useTheme
// import { useMediaQuery } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Topbar,Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  content: {
    // height: '100%'
  }
}));

const Main = props => {
  const { children } = props;
  const classes = useStyles();
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
  //   defaultMatches: true
  // });
  return (
    <div
        className={clsx({
          [classes.root]: true
        })}
      >
      <Topbar />
      <main className={classes.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

  // <Footer />

Main.propTypes = {
  history: PropTypes.object,
  children: PropTypes.node
};
export default withRouter(Main);
