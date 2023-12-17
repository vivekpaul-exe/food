import React, { useState } from "react"
import axios from "axios"
import {REACT_APP_SOME_API_KEY} from "../../index"
import { Button, Container, Typography } from "@material-ui/core"   
import { useStyles } from "@chakra-ui/react";

// this is the grocery buying pagee
export const ItemList =() => {
    const [state,setState]  = useState([]);
    const classes = useStyles();
    const handleClick = () => {
        get_products()
    }
        async function get_products(){
            try {
                let response = await axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${REACT_APP_SOME_API_KEY}`)
                    setState(response.data)
                    console.log(response.data , state)
            } catch (error) {
                console.log(error)
            }
        }
        
 

    return (
       <Container>
            <Button onClick={handleClick}> Click me
            </Button>
            <Typography>{state}</Typography>
       </Container>

       
    )
}