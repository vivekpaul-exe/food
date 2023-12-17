import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:'space-evenly',
  },
  paper: {
    padding: theme.spacing(1),
    height :128,
    width:128,
    backgroundImage:'url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg")',
    color: theme.palette.text.secondary,
  },
}));

export default function Congrp() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}  justifyContent="space-between">
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}  justifyContent="space-between">
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container  spacing={1}>
        <Grid container justifyContent="space-evenly" item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container justifyContent="space-evenly" item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        
      </Grid>
    </div>
  );
}
