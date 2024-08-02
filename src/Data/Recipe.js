// This is tha page for the complated fucntioons export to be addedin the commit as final FINAL replace the card with content funcions

import React, {useState,useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {REACT_APP_SOME_API_KEY} from "../index"
import Card from '@material-ui/core/Card';
import {ButtonBase, CircularProgress} from "@material-ui/core"
import { Icon } from "atomize";
import Vibrant from "node-vibrant"
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import { CircularProgress } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      elevation: 0,
      backgroundColor:'#ffccbc',
      maxWidth: 312,
      height:350,
      borderRadius : 16,
      boxShadow: '0px 0px 0px 0px',
    
    },   
    progresser:{
      marginTop:'30%',
      marginLeft:'30%',
      color:'#fff',
    } ,
    rec_head:{
        fontSize:'1rem !important',
        fontFamily:'Coolvetica',
        textAlign:'center',
        textOverflow:"hidden",
        padding: '8px 16px 8px 8px',
        margin:0,
    },
    rec_type:{
      lineHeight:'1',
    },
    recipe_actions:{
      padding: '8px 16px 0px 16px'
    },
    rec_icon:{
      height:'0.7em',
      width:'0.7em',
    },
    buttonmedia:{
      display:"contents",
    },
    box_des:{
        display:'flex',
        marginTop: 8,
        marginLeft:16,
        marginRight:16,
        fontFamily:'Noto Sans Semibold',
    },
    box_des1:{
        marginRight:'auto',
        fontSize:12,
        fontFamily:'Noto Sans Semibold',
    },
    box_des2:{
        marginLeft:'auto',
        fontSize:12,
        fontFamily:'Noto Sans Semibold',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
    recipe_content:{
      padding: '0px 16px 16px 16px',
      fontFamily:'Noto Sans',
      fontSize:12,
    },
    recipe_typo:{
      fontFamily:'Noto Sans',
      fontSize:12,
      overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
    },
  }),
);

// export default const favRacipe = []
export default function Content() {
  const classes = useStyles();
  // const [loading,setLoading] = React.useState(True);
  const [palette,setPalette] = useState({});
  const [title ,setTitle] = useState('A Title');
  const [summary ,setSummary] =  useState('A summary');
  const [recimage , setRecimage] = useState('https://www.qsrmagazine.com/sites/default/files/styles/slideshow_image/public/slideshow-images/slides/mcdonaldsglobal.jpg?itok=X8uup3iY')
  const [vegeterian , setVegeterian] = useState('false');
  const [veryHealthy , setVeryHealthy] = useState('false')
  const [recipe,setRecipe] = useState({})
  const [showLoading , setShowLoading] = useState(true);
  const [id , setId] = useState('');
  const [fav, setFav] = useState(false);
	const navigate= useNavigate();

  const image = new Image();

    useEffect(()=>{
        async function getRecipe() {
    
          try {
            let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_SOME_API_KEY}`)
             let data = await response.json();
             
            setTitle(data.recipes[0].title);
            setRecimage(data.recipes[0].image)
            setRecipe(data.recipes[0])
            
            setVegeterian(data.recipes[0].vegeterian)
            setVeryHealthy(data.recipes[0].veryHealthy)
            setSummary(data.recipes[0].summary)
            setId(data.recipes[0].id)
            // const paletteData = await Vibrant.from({image}).getPalette();                                     
            // setPalette(paletteData)
            setShowLoading(false);
		console.log(data);
          } catch (error) {
            console.log(error)
    
          }
    
        }
        getRecipe()
    
    
    
      },[]);
  
      const handleOpen =() => {
        navigate(`/recipe/${recipe.id}`)
      }
  return (
    <Card className={classes.root}>
      {showLoading ? <div className={classes.progresser}><CircularProgress size={100} thickness={2} color='#fff'  /></div> : <>
      <CardHeader
        className={classes.rec_head}
        action={
          <IconButton aria-label="Add to favourites" onClick={() => setFav((fav) => !fav)}>
            {fav ?  <Icon name="HeartSolid" color="#bd0e14" size="24px"/> :<Icon name="Heart" color="#202020" size="24px" />  }
          </IconButton>
        }
         title={
            <Typography className={classes.rec_head}>
                {recipe.title}
            </Typography>
         }
        >
            
        </CardHeader>
        <ButtonBase className={classes.buttonmedia}
          onClick={handleOpen}>
      <CardMedia 
        className={classes.media}
        image={recimage}
        title={title}
      /></ButtonBase>
      <Typography className={classes.box_des}>
            <Typography className={classes.box_des1}>Description</Typography>
            <Typography className={classes.box_des2}>{recipe.readyInMinutes} mins</Typography>
        </Typography>
      
      <CardActions className={classes.recipe_actions}>
            <Typography className={classes.rec_type} >
                <StarBorderRoundedIcon className={classes.rec_icon}/>
                <StarBorderRoundedIcon className={classes.rec_icon}/>
                <StarBorderRoundedIcon className={classes.rec_icon}/>
                <StarBorderRoundedIcon className={classes.rec_icon}/>
                <StarBorderRoundedIcon className={classes.rec_icon}/>
            </Typography>
        </CardActions>
      <CardContent className={classes.recipe_content}>
        
        
        <Typography className={classes.recipe_typo} variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{__html: summary}} />
        <Typography>{JSON.stringify(palette)}</Typography>
        
      </CardContent>
     </> 
    }
    </Card>
  );
}


function setCookieFavRecipe(key,Value,expirationDays){
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate()+ expirationDays);

}