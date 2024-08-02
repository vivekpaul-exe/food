import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Box from "@material-ui/core/Box"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  linkbutton:{
    padding:12
  },
  toolbutton :{
    color: "#0d1821",
    fontWeight: "500",
    fontFamily:  'Coolvetica',
    fontsize : "1.15em",
    margin:"auto",
    padding:0,
    borderRadius:50,
    width:"max-content",
    height:"-webkit-fill-available",
    textTransform: 'none'
  },
});

export default function FavDrawer() {
  const classes = useStyles();
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* Added Here the favourites list item
         */}
         </List>
    </div>
  );

  return (
    <div>
      {[ 'Top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.toolbutton} onClick={toggleDrawer(anchor, true)}>
            <Box className={classes.linkbutton}>Favourites</Box></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
