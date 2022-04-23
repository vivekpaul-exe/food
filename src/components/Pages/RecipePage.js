import React from "react"
import Axios from "axios";
import {Container,
        Box,
        Typography,
    Grid,
        Button,
        } from "@material-ui/core"
import {recipe} from "../../demo"
import { makeStyles } from '@material-ui/core/styles';
import {REACT_APP_SOME_API_KEY} from "../../index";

export default function RecipePage(props){
    const [information , setInformation] = React.useState('')
    const [recipe_steps , setRecipe_steps] = React.useState([])
    
    const get_full_info = async()  => {
        const id1 =   "716429";
        const id = (props.id) ;
        const url1 = ` https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${REACT_APP_SOME_API_KEY}`;
        const url2 = `https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=${REACT_APP_SOME_API_KEY}`
 
       
         const  response = await Axios.get(url2);
        setRecipe_steps(response.data);    
            //  setInformation(response.data)
         console.log(response.data , "Info modal") 
      }
      const classes = useStyles();
    return (
        <Container maxWidth="xl">
            
            <Box className ={classes.rec_name}>
                {recipe.title}
                <hr/>
                {recipe.sourceName}
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
                        best for {recipe.dishTypes}
                    </Typography>
                    <Typography>
                        {recipe.winePairing.pairingText}
                    </Typography>
                </Grid>
              
                    <Box>
                       Stpes  
                    <Button onClick={get_full_info}>get steps</Button>
                    {/* {recipe_steps} */}
                    </Box>
                   
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
    rec_info : {

    },
    
}))

// Data 
