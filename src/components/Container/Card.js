import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Card , Button , Typography, CardActionArea,CardActions,CardContent,CardMedia} from "@material-ui/core"
import RecipeModal from '../Modal/Modal';
import dotenv from "dotenv"
dotenv.config();
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    display:"-webkit-inline-box",
    overflow : "auto",
  },
  Cardroot: {
    maxWidth: 345,
    border: "solid 1px",
    borderColor: "grey",
    padding : 2,
    
  },
  media: {
    height: 140,
  },
}));

  

export default function SingleLineGridList() {
  const classes = useStyles();
  // const [similiarRecipes,setSimiliarRecipes] = useState([])
  
//   useEffect(() => {
//     async function getRecipe(){
//       const apiKey = process.env.API_KEY
      
//       console.log()
//       if (count === 0){
//         count += 1;
//         console.log("count = ",count, "i got called")
//         let response = await fetch(`https://api.spoonacular.com/recipes/715538/similar?apiKey=${apiKey}`)
//         let data = await response.json()
//         setSimiliarRecipes(data);
//       } if (count === 1) {
//         console.log("got the data", {similiarRecipes})
        
//       }
      
      
//     }
//     getRecipe()
//   }
// )

  return (
    <div className={classes.root}>
      {/* <GridList spacing={2} className={classes.gridList} cols={2.5}>
        {similiarRecipes?.map((item) => (
          <ResCard title = {item.title}
                id={item.id} 
                url = {item.sourceUrl}
                time = {item.readyInMinutes}
                serve = {item.servings}>
          </ResCard>
        ))}
      </GridList> */}
    </div>
  );
}

function ResCard({url , time , serve ,title}){
  const classes = useStyles();
  return (
    <Card className={classes.Cardroot} >
      <CardActionArea>
        <RecipeModal>
        <CardMedia
          className={classes.media}
          // image={similiarRecipes.img}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        </RecipeModal>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" Linkto ={url} color="primary">
          Learn More
        </Button>
        <Typography>{time}</Typography>
        <Typography >{serve} servings</Typography>
      </CardActions>
    </Card>
  )
}