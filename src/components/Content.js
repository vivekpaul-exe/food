import React from 'react';
import {useNavigate,createSearchParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


import { Icon } from "atomize";
import { CardHeader,
          Card , 
          CardContent,
          CardActions,
          CardMedia,
          Collapse ,
          IconButton,
          ButtonBase} from "@material-ui/core"


import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import RecipeModal from './Pages/RecipeModal';
import {Menu  , MenuItem } from "@material-ui/core"
import InfoModal from './Pages/infoModal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    fontFamily:'Signika Negative',
    borderRadius: 30
  },
    title:{
      fontFamily:'Signika Negative !important',
      fontSize: "1.1em",
      whiteSpace: "nowrap",
      overflow:"hidden",
      textOverflow:"ellipsis",
      margin:"auto",

    },
    cardbutton:{
      position :"absolute",
    },
    buttonmedia:{
      display :'contents',
    },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:
    margin: '1em',
    borderRadius: 15,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function Content(props) {
  const classes = useStyles();
	
  const [expanded, setExpanded] = React.useState(false);
	const navigate= useNavigate();
  const handleOpen =() => {
    navigate(`/recipe/${props.id}`)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (


      <Card className = {classes.card}>
        <IconButton className = {classes.cardbutton}>
          <SimpleMenu id={props.id}/>
        </IconButton>
        <ButtonBase
          className={classes.buttonmedia}
          onClick={handleOpen}>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
      </ButtonBase>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Icon name="Heart" size="24px" />

        </IconButton>
  	<Typography className= {classes.title}>
	  {props.title}</Typography>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Icon name="DownArrowCircle" size="24px" />
        </IconButton> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>
             <Typography dangerouslySetInnerHTML={{__html: props.summary}} />
          </Typography>

        </CardContent>
      </Collapse>
    </Card>

  );
}

function SimpleMenu(props) {
	
  const [anchorEl , setAnchorEl] = React.useState(null);
  const navigate= useNavigate();

  const handleClick = (e) => {

    setAnchorEl(e.currentTarget);


  }
 
  const handleClose = () => {

    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Icon name="Options" size="20px" />

      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><RecipeModal id= {props.id}/></MenuItem>

        <MenuItem onClick={handleClose}><InfoModal id ={props.id}/></MenuItem>
        {/* <MenuItem onClick={navigate(`/recipe/${props.id}`)}>view Recipe</MenuItem> */}
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  )
}


