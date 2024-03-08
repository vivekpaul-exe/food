import React , {useEffect} from "react"
import Vibrant from "node-vibrant"
import axios from "axios";
import {Container,
        Box,
        Typography,
    Grid,
        Button,
        } from "@material-ui/core"
import {recipe} from "../../demo"
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {REACT_APP_SOME_API_KEY} from "../../index";
import RecipeSteps from "./steps"
import  { recipeDATA } from "./recipeDATA"
import Content from "../Content";
import   ImageWithPalette  from "../GetColor"

// Emeber to add the recipe id to the recipe to connect the navbar to the recipe page 

export default function RecipePage(props){
    const [information , setInformation] = React.useState('');
    const [palette,setPalette] = React.useState('');
   const [id , setId]= React.useState(props.id);
    const [recipe_steps , setRecipe_steps] = React.useState([]);
    const [showLoading , setShowLoading] = React.useState(true);
    const [recipe ,setRecipe] = React.useState('')
    
    const [recipesim,setRecipesim] = React.useState([]);
    // const imglink = 'https://img.freepik.com/premium-photo/colorful-fabric-material-wallpaper-mixed-color-background_234209-504.jpg'
    let params = useParams();
    const StoredRecipeID = sessionStorage.getItem('recipe_id');
  useEffect(()=>{
    async function getRecipeinfo() {
      
    //    console.log(params , "search Params")
      try {
	let res = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${REACT_APP_SOME_API_KEY}`)
         	 setRecipe(res.data)
            // setRecipe(recipeDATA).then(console.log(recipeDATA))
            console.log({recipe})
    // let res_sim = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=${REACT_APP_SOME_API_KEY}`)
        // .then(arr => setRecipesim(arr.map(res_sim => res_sim.data)))
        // console.log( res_sim.data, recipesim)
// //	let res_steps = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${REACT_APP_SOME_API_KEY}`)
// //	      console.log(res_steps.data)
	    
//          res_sim.map((step)=> {
//             return setRecipesim.concat(step)
//          })
        //  console.log(recipesim)
    let recipe_steps = await axios.get(``)
        setShowLoading(false);
      } catch (error) {
        console.log(error)

      }

    }
    getRecipeinfo()



  },[]);
//   useEffect(()=>{
    
//     const extractColors = async() => {
//         try{
//             const vibrant = await Vibrant.from(imglink).getPalette().then((palette) => console.log(palette))
//             setPalette(vibrant)
//         } catch (error) {
//             console.error('Error extracting colors:', error)
//         }

//     };
//     extractColors();
// },[recipe.image]);

// Vibrant.from{recipe.image}.getPalette().then((palette) => console.log(palette))
const classes = useStyles();
    return (
        <Container maxWidth="xl">
            
              <p>{information}</p>
	                <Box className ={classes.rec_name}>
                {recipe.title}
               
            </Box>
            <Grid container spacing={3}>
             <Grid item xs={12} sm={6} >

                    <Typography className={classes.rec_info} >
                        {recipe.glutenFree}
                        {recipe.dairyFree}
                        {recipe.cheap}
                        {recipe.veryPopular}
                        {recipe.pricePerServing}
                    </Typography>
                    <Typography>
                        best for :  {recipe.dishTypes}
                    </Typography>
                    <Typography>
                        {/* {recipe.winePairing.pairingText} */}
                    </Typography>
                    <hr />

                    <Typography className={classes.rec_info}>
                        Summary
                        <Typography className={classes.rec_info} dangerouslySetInnerHTML={{__html: recipe.summary}} />

                    </Typography>

                 </Grid>

            <Grid item xs={12} sm={6}>
                            <img className={classes.recimg} src={recipe.image} />
                </Grid>

                

                    <Box className={classes.rsteps}>
                       Steps
                    {recipe_steps} 
	    		<RecipeSteps />
                   </Box>

            </Grid>
            <Grid>
            {/* {recipesim.map(recipesim)} */}
            </Grid>
            <Container>
            <div>
            {palette && (
                <div>
                    {/* {imglink} */}
                    {recipe.image}
                    <img src={recipe.image} alt="original" />
                    <h3>Vibrant Color Paltette</h3>
                    {palette}
                    <div style={{display: 'flex' ,justifyContent:'space-between'}}>
                   
                        {Object.keys(palette).map((key) => (
                            <div key={key} style={{ backgroundColor: palette[key].hex,paddding:'10px', margin:'5px'}}>
                                <p>{key}</p>
                                <p>{palette[key].hex}</p>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
            </Container>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    recimg : {
        border:"1px solid #42424200",
        borderRadius : 13,
    },
    rec_name :{
        fontWeight: "500",
        fontFamily: "Coolvetica",
        fontSize: "3.5em",
        paddingBottom: "8vh",
        paddingTop: "2vh",

    },
    rsteps :{
      width: "50%",
    },
    rec_info : {
        fontFamily:"Coolvetica !important",
    },

}))

// Data
const recipe_sim = (props) => {
    return (
        <Container>
            <Typography>{props.title}</Typography>
            <Typography>{props.id}</Typography>
            <Typography>{props.readyinminutes}</Typography>
            <Typography>{props.servings}</Typography>
        </Container>
    )
}