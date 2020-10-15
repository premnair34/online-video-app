import React from 'react';
// , { useState, useEffect }
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
import teacher from './teacher.svg';
import student from './student.svg';
import professional from './professional.svg';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em'
  },
  subtitle:{
    fontSize:'1.5em',
    lineHeight:'1.5em',
    margin: theme.spacing(2),
    fontWeight:'400',
    color:'#333',
  },
  imgWidth:{
    width:'100px'
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
    minHeight:'230px',
    padding: theme.spacing(4),
  },
  paperTitle:{
    marginBottom: theme.spacing(2)
  }
}));


const FreeCoding = props => {
  const { history } = props;
  const classes = useStyles();
  return (
    <section className={classes.section}>
        <Grid  container direction="row" justify="space-evenly" alignItems="center" spacing={4}>
          <Grid item xs={12} lg={12}>
              <Typography className={classes.title} variant="h4">
                Who can join Freecoding School?
              </Typography>
              <Typography className={classes.subtitle} variant="h6">
                Are you one of these people, then you are welcome to join us.
              </Typography>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} p={2}>
              <Paper className={classes.paper}>
                  <img src={student} className={classes.imgWidth} />
                  <Typography variant="h5" className={classes.paperTitle}>STUDENTS</Typography>
                  <Typography variant="subtitle1">Become a Freecoding School Student to learn how to code.</Typography>
              </Paper>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
              <Paper className={classes.paper}>
                  <img src={teacher} className={classes.imgWidth} />
                  <Typography variant="h5" className={classes.paperTitle}>TEACHERS</Typography>
                  <Typography variant="subtitle1">Learn CS concepts to build sustainable CS courses at your school</Typography>
              </Paper>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
              <Paper className={classes.paper}>
                  <img src={professional} className={classes.imgWidth} />
                  <Typography variant="h5" className={classes.paperTitle}>PROFESSIONALS</Typography>
                  <Typography variant="subtitle1">Volunteer to teach Computer Science courses</Typography>
              </Paper>
          </Grid>
      </Grid>
    </section>
  );
};
FreeCoding.propTypes = {
  history: PropTypes.object
};
export default withRouter(FreeCoding);
