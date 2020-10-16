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
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight:"60vh"
  },
  learnMoreBtn:{
    marginTop: theme.spacing(2),
    display:"flex",
    width:"200px"
  }
}));

const Home = props => {
  const { history } = props;
  const classes = useStyles();
  return (
    <Grid  container 
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.root} >
        <Grid item lg={3} xs={12}>
            <Grid item  xs={12}  alignItems="start">
                <Typography variant="h4">Current Events</Typography>
                <Typography variant="h6">Scratch Programming</Typography>              
                <Typography variant="body1">Mon - SAT 4:30 pm - 5.30 pm IST.</Typography>   
                <Typography variant="h6">Introduction Programming</Typography>              
                <Typography variant="body1">SUN 3:00 pm - 4.00 pm IST.</Typography>   
                <Typography variant="body1">Zoom meeting ID : 365 546 4148</Typography>  
                <caption> please send an email for password at support@freecodingschool.org</caption> 
            </Grid>
        </Grid>
        <Grid item lg={3} xs={12}>
            <Grid item  xs={12}  alignItems="start">
                <Typography variant="h4">Upcoming Events</Typography>
                <Typography variant="body1">New Batch Starts On Nov 1st, 2020</Typography>                              
                <Button variant="contained" color="secondary" size="large" className={classes.learnMoreBtn}
                    href="https://forms.gle/1CSaz5JA4zJe2UHu9" target="_blank">
                    register now
                </Button>        
            </Grid>
        </Grid>
    </Grid>
  );
};
Home.propTypes = {
  history: PropTypes.object
};
export default withRouter(Home);
