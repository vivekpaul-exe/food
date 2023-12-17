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

export default function SearchList(props) {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleClick=  () => {

  // navigate(`/recipe/${_id}`);
	  navigate(`/recipe/${props._id}`)
//    <Link to="/recipe" push={true} _id={_id}/>
  console.log(props._id, "frmo list")
	    }
  return (  
    <Grow in>
    <List className={classes.root}>

      <ListItem button component={Link}  onClick ={handleClick} className={classes.listitem}  id={props._id}>
        <ListItemAvatar>
        <Avatar alt={props.title} src={props.img} />
        </ListItemAvatar>
        <ListItemText primary={props.title}  secondary={props.id} />
      </ListItem>
    </List>
    </Grow>
  );
}
