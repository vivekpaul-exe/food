import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {useNavigate } from "react-router-dom";

import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listitem:{
    marginTop:4,
    borderRadius: 4,
  },
}));

export default function SearchList({_id ,title , img}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick=  () => {
    sessionStorage.setItem('_id', _id);
    <Link to="/recipe" push={true} _id={_id}/>
    console.log(_id, "frmo list")
  }
  return (  
    <Grow in>
    <List className={classes.root}>

      <ListItem button component={Link} href="/recipe" onClick ={handleClick} className={classes.listitem} href = "recipe" id={_id}>
        <ListItemAvatar>
        <Avatar alt={title} src={img} />
        </ListItemAvatar>
        <ListItemText primary={title}  />
      </ListItem>
    </List>
    </Grow>
  );
}
