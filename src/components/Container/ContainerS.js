import React from "react"
import {Paper , Box , Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// import Axios from "axios"

import ResCard from "./Card"
import image3 from "./food3.jpg"
import dotenv from "dotenv"
dotenv.config();
// import {v4 as uuidv4} from "uuid"
export default function  ContainerS() {
 
//   const [similiarRecipes,setSimiliarRecipes] = useState([])

//   useEffect(() => {
//     async function getRecipe(){
//       const apiKey = process.env.API_KEY
//       let response = await fetch(`https://api.spoonacular.com/recipes/715538/similar?apiKey=${apiKey}`)
//         let data = await response.json()
//       setSimiliarRecipes(data.data);
//     }
//     getRecipe()
//   }
// )
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing ={2}>
        <Grid item xs={6}>
          <Box className={classes.boxitem}>
          <Paper className={classes.SimiliarPaper}>
            <Box className ={classes.boxitem}>
              
            <ResCard />
            </Box>
          </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.boxitem1}>
         <img className = {classes.img2} src={image3} alt="food"/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
const useStyles = makeStyles((theme) => ({
  boxitem1 :{
    height :550,
    fontWeight: 800,
  
  },
  SimiliarPaper :{
    width:"inherit",
    height :"25rem",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "Transparent",
  },
  cards :{
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  img2: {
    width:550,
    marginLeft : 95,
    border: "solid 1px",
    borderColor: "Black",
    borderRadius : 25,
  },
  boxitem:{
    marginTop : 64,
    width :"inherit",
    
    marginBottom:"auto",
  },
  }));
