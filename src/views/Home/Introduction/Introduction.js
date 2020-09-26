import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  Link,
  Paper,
  Typography
} from '@material-ui/core';
import YouTube from 'react-youtube';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  subtitle:{
    margin: theme.spacing(2),
    color:'#333',
  },
  section:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    padding: theme.spacing(10),
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'200px',
    padding: theme.spacing(4),
  },
  paperTitle:{
    marginBottom: theme.spacing(2)
  }
}));


const Introduction = props => {
  const { history } = props;
  const classes = useStyles();
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };
  const _onReady = event => {
      event.target.pauseVideo();
  }
  return (
    <Grid className={classes.section} container direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={12} lg={12}>
            <Typography className={classes.title} variant="h4">
               Computer Science
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
               Why Computer Science for High School Students?
            </Typography>
        </Grid>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
            <YouTube videoId="OAx_6-wdslM" opts={opts} onReady={_onReady} />
        </Grid>
        <Grid item xs={12} lg={12}>
            <Typography className={classes.title} variant="h4">
               Introducing How Computers Work
            </Typography>
            <Typography className={classes.subtitle} variant="body">
               Computer science is increasingly becoming part of the school curriculum and studies
               have now shown that students who learn coding and computer science
               go on to out perform in reading and writing, math, and science.
            </Typography>
        </Grid>
    </Grid>
  );
};
Introduction.propTypes = {
  history: PropTypes.object
};
export default withRouter(Introduction);
