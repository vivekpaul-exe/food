import React from 'react';
import { Icon } from "atomize"

import { alpha ,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
        Box,
       
        Drawer,
        IconButton,
        List , 
        ListItem,

} from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SearchModal from './searchBar';
// import RecipeModal from '../Modal/Modal';
export default function Navbar() {
  const classes = useStyles();
  
 
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <List
     
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  
    
    >
      <ListItem button href="recipe" className={classes.listitem} onClick={handleDrawerClose}>Recipes</ListItem>
      <divider/>
      <ListItem button  href="ingredients" className={classes.listitem} onClick={handleDrawerClose}>Ingredients</ListItem>
      <ListItem button  href="Cuisines" className={classes.listitem} onClick={handleDrawerClose}>Cuisines</ListItem>
      <ListItem button  href="wines" className={classes.listitem} onClick={handleDrawerClose}>Wines</ListItem>
      <ListItem button  href="itemspage" className={classes.listitem} onClick={handleDrawerClose}>Item List</ListItem>
    </List>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';


  //  Here r mobile men u is rendered 
  //  Changing it to drawer right 

  const renderMobileMenu = (


    <div>
    
        <Drawer
        className={classes.drawer}
       
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
          >
            {renderMenu}
          </Drawer>
          </div>
    //   <Menu
    //   anchorEl={mobileMoreAnchorEl}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //   id={mobileMenuId}
    //   keepMounted
    //   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //   open={isMobileMenuOpen}
    //   onClose={handleMobileMenuClose}
    // >
    //   <MenuItem>
        
    //     <p>Messages</p>
    //   </MenuItem>
    //   <MenuItem>
        
    //     <p>Notifications</p>
    //   </MenuItem>
    //   <MenuItem onClick={handleProfileMenuOpen}>
        
    //     <p>Profile</p>
    //   </MenuItem>
    // </Menu>
    );
  return (
    <div className={classes.root}>
      <div className={classes.grow}>
      <AppBar className={classes.appbar} position="static" elevation={0}>

        <Toolbar className ={classes.toolbar}>
          {/* <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </Button> */}
          <Typography>
            <Box href=" " className={classes.title}>
            foodster</Box>
          </Typography>
         {/* <Searchbar/> */}
         <SearchModal/>
          <div className = {classes.grow} />
          <div className = {classes.sectionDesktop}>

          <Button  href="recipe"  className ={classes.toolbutton} color="inherit">
            <Box>
              Recipes
              </Box>
            </Button>
            <Button  href="ingredients" className ={classes.toolbutton} color="inherit">
            <Box>
              Ingredients 
              </Box>
            </Button>
            <Button href="Cuisines" className ={classes.toolbutton} color="inherit">
            <Box>
              Cuisines
              </Box>
            </Button>
            <Button href="wines" className ={classes.toolbutton} color="inherit">
            <Box>
              Wines
              </Box>
            </Button>
            <Button href="itemspage" className ={classes.toolbutton} color="inherit">
            <Box>
              Item List
              </Box>
            </Button>
           

         
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
             <Icon name="Menu" size="40px" />
            </IconButton>
          </div>
        </Toolbar>
       
      </AppBar>
      {renderMobileMenu}
     
      </div>
    </div>
  );
}
const drawerWidth = "95vw";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer : {
    width : drawerWidth,
    backgroundColor : "whitesmoke",
  },
  appbar :{
    backgroundColor:"white",
    color:"#242424",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    display: 'block',
    fontStyle:"italic",
    flexGrow: 1,
    color:"Black",
    fontFamily:  'Merriweather Sans',
    fontSize: "2.5rem",
         "&:hover" : {
	       color:'#FE6B8B'
       }
    
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
      
    // },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar :{
    boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
  },
 listitem: {
   fontFamily:  'Signika Negative',
   paddingLeft:"1em",  
   fontSize:"2rem",
 },
  
  toolbutton :{
    color: "#424242",
    fontWeight: "500",
    fontFamily:  'Merriweather Sans',
    fontsize : "1.5rem",
    textTransform: 'none'
  },
 
}));
