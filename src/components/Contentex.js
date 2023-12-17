import React,{useEffect,useState} from 'react';
import {REACT_APP_SOME_API_KEY} from "../index"
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


export default function Contentex() {
  const classes = useStyles();
//   Setting the fetch params here instead of the home 
const [title ,setTitle] = useState('A Title');
  const [summary ,setSummary] =  useState('A summary');
  const [image , setImage] = useState('https://www.qsrmagazine.com/sites/default/files/styles/slideshow_image/public/slideshow-images/slides/mcdonaldsglobal.jpg?itok=X8uup3iY')
  const [vegeterian , setVegeterian] = useState('false');
  const [veryHealthy , setVeryHealthy] = useState('false')
  const [showLoading , setShowLoading] = useState(true);
  const [id , setId] = useState('');
// end of the added code 
  const [expanded, setExpanded] = React.useState(false);
	const navigate= useNavigate();
    useEffect(()=>{
        async function getRecipe() {
    
          try {
            let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_SOME_API_KEY}`)
             let data = await response.json();
    
            setTitle(data.recipes[0].title);
            setImage(data.recipes[0].image)
            setVegeterian(data.recipes[0].vegeterian)
            setVeryHealthy(data.recipes[0].veryHealthy)
            setSummary(data.recipes[0].summary)
            setId(data.recipes[0].id)
            setShowLoading(false);
          } catch (error) {
            console.log(error)
    
          }
    
        }
        getRecipe()
    
    
    
      },[]);
  const handleOpen =() => {
    navigate(`/recipe/${id}`)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (


      <Card className = {classes.card}>
        <IconButton className = {classes.cardbutton}>
          <SimpleMenu id={id}/>
        </IconButton>
        <ButtonBase
          className={classes.buttonmedia}
          onClick={handleOpen}>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
      </ButtonBase>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Icon name="Heart" size="24px" />

        </IconButton>
  	<Typography className= {classes.title}>
	  {title}</Typography>
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
             <Typography dangerouslySetInnerHTML={{__html: summary}} />
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


