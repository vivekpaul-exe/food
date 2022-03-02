import React,{ useState,useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';

import image2 from "./food2.jpg"
import ResCard from "./Card"
import { Paper, Grid , Box } from "@material-ui/core"
import dotenv from "dotenv"
dotenv.config();
export default function  ContainerR() {
  // const [random , setRandom] = useState()

  // useEffect(()=>{
  //   async function getRecipe() {
  //     const APP_KEY = process.env.APP_KEY;
  //     console.log(`API key  =  ${process.env.APP_KEY}`)
  //     try {
  //       let response = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${apiKey}`)
  //        let data = await response.json();
  //        console.log(data)
  //       setTitle(data.recipes[0].title);
  //       setImage(data.recipes[0].image)
  //       setVegeterian(data.recipes[0].vegeterian)
  //       setVeryHealthy(data.recipes[0].veryHealthy)
  //       setSummary(data.recipes[0].summary)
  //       setId(data.recipes[0].id)
  //       setShowLoading(false);
  //     } catch (error) {
  //       console.log(error)
        
  //     }

  //   }
  //   getRecipe()
  //   .then(data => console.log(data))


  // },[]);
    const classes = useStyles();

  return (
    <Box className ={classes.boxroot}>
      <Grid container spacing ={2}>
        <Grid className={classes.griditem}   item xs={6}>
          <Box className={classes.boxitem1}>
          <img className = {classes.img3} src={image2} alt="food "/>
          </Box>
        </Grid>
        <Grid className={classes.griditem} item xs={6}>
          <Box className={classes.boxitem2}>

            <Paper className={classes.RandomPaper}>
              <ResCard />
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  boxroot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  RandomPaper :{

    width:"inherit",
    height :"25rem",
  },
  img3: {
    width:550,
    border: "solid 1px",
    borderColor: "Black",
    borderRadius : 25,
  },
  boxitem2 :{
    marginTop : 64,
    width :"62rem",
    marginRight :"-20rem",
    marginBottom:"auto",
  },
  boxitem1 :{
    height :550,
    fontWeight: 800,

  },
  
  title: {
    flexGrow: 1,
    color:"Black",

  },
}));
