import React , {useEffect} from "react"
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
import Content from "../Content";
export default function RecipePage(){
    const [information , setInformation] = React.useState('');
//    const [id , setId]= React.useState(props.id);
    const [recipe_steps , setRecipe_steps] = React.useState([]);
    const [showLoading , setShowLoading] = React.useState(true);
    const [recipe ,setRecipe] = React.useState('')
    const [recipesim,setRecipesim] = React.useState([]);
    let params = useParams();
    const StoredRecipeID = sessionStorage.getItem('recipe_id');
  useEffect(()=>{
    async function getRecipeinfo() {
      
       console.log(params , "search Params")
      try {
	let res = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${REACT_APP_SOME_API_KEY}`)
         	 setRecipe(res.data)
    let res_sim = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/similar?apiKey=${REACT_APP_SOME_API_KEY}`)
        // .then(arr => setRecipesim(arr.map(res_sim => res_sim.data)))
        console.log( res_sim.data, recipesim)
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



  },[])		

		;


const classes = useStyles();
    return (
        <Container maxWidth="xl">
              <p>{information}</p>
	                <Box className ={classes.rec_name}>
                {recipe.title}
               
            </Box>
            <Grid container spacing={3}>


            <Grid item xs={12} sm={6}>
                            <img className={classes.recimg} src={recipe.image} />
                </Grid>

                    <Grid item xs={12} sm={6}>

                    <Typography className ={classes.rec_info}>
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

                    <Typography>
                        Summary
                        <Typography dangerouslySetInnerHTML={{__html: recipe.summary}} />

                    </Typography>

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
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    recimg : {
        border:"1px solid #42424200",
        borderRadius : 13,
    },
    rec_name :{
        fontWeight: "600",
        fontFamily: "signika Negative",
        fontSize: "1.5em",
        paddingBottom: "2vh",
        paddingTop: "2vh",

    },
    rsteps :{
      width: "50%",
    },
    rec_info : {

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