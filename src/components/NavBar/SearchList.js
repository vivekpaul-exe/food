import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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

export default function SearchList({title , img}) {
  const classes = useStyles();

  return (  
    <Grow in>
    <List className={classes.root}>

      <ListItem className={classes.listitem}>
        <ListItemAvatar>
        <Avatar alt={title} src={img} />
        </ListItemAvatar>
        <ListItemText primary={title}  />
      </ListItem>
    </List>
    </Grow>
  );
}
