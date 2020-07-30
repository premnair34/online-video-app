import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Link,
  Typography
} from '@material-ui/core';
import Community from './Community';
import FreeCoding from './FreeCoding';
import Programs from './Programs';
import Introduction from './Introduction';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  }
}));

const Home = props => {
  const { history } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Community />
      <FreeCoding />
      <Programs />
      <Introduction />
    </div>
  );
};
Home.propTypes = {
  history: PropTypes.object
};
export default withRouter(Home);
