import React , {useEffect} from "react"
import { Icon } from "atomize";
import Vibrant from "node-vibrant"
import axios from "axios";
import {Container,
        Box,
        Typography,
    Grid,
        Button,
        Paper,
        } from "@material-ui/core"
import {recipe} from "../../demo"
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {REACT_APP_SOME_API_KEY} from "../../index";
// import { extractColors } from "extract-colors";
import  { recipeDATA } from "./recipeDATA"
import   ImageWithPalette  from "../GetColor"
// import  "../../stepsr.json"
// Emeber to add the recipe id to the recipe to connect the navbar to the recipe page 

export default function RecipePage(props){
    const [imgUrl , setImgUrl] = React.useState("")
    const [palette,setPalette] = React.useState({})
    const [ingredient , setIngredient] = React.useState([]);
    const [error,setError] = React.useState()
    const [loading,setLoading] = React.useState(true)
  
   const [id , setId]= React.useState(props.id);
    const [steps , setSteps] = React.useState([]);
    const [showLoading , setShowLoading] = React.useState(true);
    const [data ,setData] = React.useState([])
    const [unit,setUnit] = React.useState(false)
    const [recipesim,setRecipesim] = React.useState([]);
    // const imglink = 'https://img.freepik.com/premium-photo/colorful-fabric-material-wallpaper-mixed-color-background_234209-504.jpg'
    let params = useParams();
    // const data= {}
    const StoredRecipeID = sessionStorage.getItem('recipe_id');
    const options = {
      pixels: 64000,
      distance:0.22,
      colorValidator: (red, green, blue, alpha = 255) => (alpha>250),
      saturationDistance:0.2,
      lightnessDistance:0.2,
      hueDistance:0.083333333,
    }
  useEffect(()=>{                                                 
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${REACT_APP_SOME_API_KEY}`);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
          
          // setData(recipeDATA)
          setIngredient(data.extendedIngredients)

          setImgUrl(data.image)
          // extractColors(imgUrl,options).then(console.log)
          let stepsrec = data.analyzedInstructions[0].steps
          setSteps(stepsrec) // Update state with fetched data
          setLoading(false); // Set loading to false
        } catch (error) {
          setError(error); // Update state with the error
          setLoading(false); // Set loading to false
        }
      };
fetchData() 
},[])
const classes = useStyles();
    return (
        <Container maxWidth="xl">
           
	                <Box className ={classes.rec_name}>
                {data.title}
               
            </Box>
            <Box className={classes.rec_name}>
              
              <Button h="2.5rem" w="2.5rem" bg="danger300" hoverBg="danger400" rounded="lg" m={{ r: "1rem" }}>
                <Icon name="Heart" size="20px" color="danger700" />
              </Button>
              <Button h="2.5rem" w="2.5rem" bg="warning700" hoverBg="warning600" rounded="lg" m={{ r: "1rem" }}>
                <Icon name="Star" size="20px" color="danger700" />
              </Button>
              <Button h="2.5rem" w="2.5rem" bg="danger300" hoverBg="danger400" rounded="lg" m={{ r: "1rem" }}>
                <Icon name="Print" size="20px" color="danger700" />
              </Button>
              <Button h="2.5rem" w="2.5rem" bg="danger300" hoverBg="danger400" rounded="lg" m={{ r: "1rem" }}>
                <Icon name="HeartSolid" size="20px" color="danger700" />
              </Button>
            </Box>
            <Grid container spacing={3}>
             <Grid item xs={12} sm={6} >

                    <Typography className={classes.rec_info} >
                        {data.glutenFree}
                        {data.dairyFree}
                        {data.cheap}
                        {data.veryPopular}
                        {data.pricePerServing}
                    </Typography>
                    <Typography>
                        best for :  {data.dishTypes}
                    </Typography>
                    <Typography>
                        {/* {recipe.winePairing.pairingText} */}
                    </Typography>
                    <hr />
             
                    <Typography className={classes.rec_info}>
                        Summary{data.servings}
                        <Typography className={classes.rec_info} dangerouslySetInnerHTML={{__html: data.summary}} />
{data.spoonacularScore}

                    </Typography>

                 </Grid>

            <Grid item xs={12} sm={6}>
                            <img className={classes.recimg} src={data.image} />
                </Grid>

                <Container maxWidth="xl">
                  <Paper elevation={0}>
                    <>
                    <Box className={classes.boxinfo}>
                      <Typography>Cooking Time </Typography>
                      <Typography>{data.cookingMinutes} </Typography>
                    </Box>
                    <Box className={classes.boxinfo}><Typography>Preparation time </Typography><Typography>{data.preparationMinutes}</Typography></Box>
                    <Box className={classes.boxinfo}><Typography> Total time </Typography><Typography> {data.readyinminutes}</Typography></Box>
                    
                    </>
                    <>
                    <Box className={classes.boxinfo}>
                      <Typography>Cuisine </Typography>
                      <Typography>{data.cuisines} </Typography>
                    </Box>
                    <Box className={classes.boxinfo}><Typography>Course </Typography><Typography>{data.dishTypes}</Typography></Box>
                    <Box className={classes.boxinfo}><Typography> Diet </Typography><Typography> {data.diets}</Typography></Box>
                    
                    <Box className={classes.boxinfo}><Typography>Difficulty Level</Typography><Typography>{data.di}</Typography></Box>
                    </>
                  </Paper>
                </Container>

                    <Box className={classes.rsteps}>
                       Steps
                    {/* {recipe_steps}  */}
                    {/* <ul>
                      {step.equipment.map((equipment, index) => (
                        <li key={index}>
                          <img src={equipment.image} alt={equipment.name} width="50" height="50" />
                          {equipment.name}
                        </li>
                      ))}
                    </ul> */}
                   </Box>

            </Grid>
            <Grid>
            {/* {recipesim.map(recipesim)} */}
            </Grid>
            <Container>
              
                    <Grid item >
                        <Paper>
                            <Typography className={classes.Sec_heading}>Ingredients</Typography>
                            
                                <Button onClick={(unit) => (!unit)}> {unit==false ? "us" : "metric"}</Button>
                                {steps.map((step) => (
                                  <Grid container spacing={3}>
                                      <Grid item xs={4}>
                                        <Paper>
                                          <div key={step.number}>
                                              <h3>Step {step.number}</h3>
                                              <Typography className={classes.rec_info}>{step.step}</Typography>
                                              <Typography h4 className={classes.rec_info}>Ingredients:</Typography>
                                              <ul>
                                              {step.equipment.map((equipment, index) => (
                                                <li key={index}>
                                                  <img src={equipment.image} alt={equipment.name} width="50" height="50" />
                                                  {equipment.name}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </Paper>
                                      </Grid>
                                    <Grid item xs={4}>
                                      {/* <Typography className={classes.Sec_heading}>Equipment</Typography> */}
                                    
                                    <ul>
                                                {step.ingredients.map((ingredient, index) => (
                                                  <Paper key={index} className={classes.ingredient_list}>
                                                    <img src={ingredient.image} alt={ingredient.name} width="50" height="50" />
                                                    {ingredient.name}
                                                  </Paper>
                                                ))}
                                              </ul>
                                    {step.length && (
                                      <p>
                                        Time required: {step.length.number} {step.length.unit}
                                      </p>
                                    )}
                                    </Grid>
                                    
                                  </Grid>
                                ))}
                                {/* <ul>
                                  {step.ingredients.map((ingredient, index) => (
                                    <li key={index}>
                                      <img src={ingredient.image} alt={ingredient.name} width="50" height="50" />
                                      {ingredient.name}
                                    </li>
                                  ))}
                                </ul> */}
                              
                            
                        </Paper>
                    
                  </Grid> 
               
            </Container>
            <Container>
           
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
    rec_info_instructions:{
        fontFamily:"Noto Sans Medium",
        fontSize:"1em",

    },
    boxinfo:{
      fontFamily:"Coolvetica",
      fontSize:16
    },

}))

// Data
