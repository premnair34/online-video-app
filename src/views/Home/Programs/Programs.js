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
import exams from './exams.png';
import student from './student.png';
const useStyles = makeStyles(theme => ({
  title:{
    lineHeight:'1.5em',
    color:'#fff',
  },
  subtitle:{
    fontSize:'1.5em',
    lineHeight:'1.5em',
    margin: theme.spacing(2),
    fontWeight:'400',
    color:'#ccc',
  },
  section:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'#192024',
    padding: theme.spacing(10),
  },
  paper:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    minHeight:'200px',
    color:'#fff',
    padding: theme.spacing(4),
  },
  paperTitle:{
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2)
  }
}));


const Programs = props => {
  const { history } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.section} container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={12} lg={12}>
            <Typography className={classes.title} variant="h4">
               PROGRAMS
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              Freecoding School is powered by collaboration of students, teachers and technology professionals.
            </Typography>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item lg={5} sm={6} xl={5} xs={12} className={classes.paper}>
                <img src={exams}  width="200" />
                <Typography variant="h5" className={classes.paperTitle}>TEACHERS</Typography>
                <Typography variant="subtitle1">
                    Students who are interested in bringing CS classes to their school can become
                    advocatesto create change by sharing their interest with teachers,
                     administrators andparents, and introducing them to the Freecoding School.
                </Typography>
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}>
                  Learn more
                </Button>
            </Grid>
            <Grid item lg={5} sm={6} xl={5} xs={12} className={classes.paper}>
                <img src={student}  width="200"/>
                <Typography variant="h5" className={classes.paperTitle}>PROFESSIONALS</Typography>
                <Typography variant="subtitle1">
                    Volunteers with a strong background in computer science and programming
                    form the backbone of this program. We welcome both computer science graduate
                    students and Tech professionals, and Academic professionals
                </Typography>
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}>
                  Learn more
                </Button>
            </Grid>
       </Grid>
    </Grid>
  );
};
Programs.propTypes = {
  history: PropTypes.object
};
export default withRouter(Programs);
