// import React from "react"
// import { Container } from "@material-ui/core"
// import axios from "axios"



// export const CuisinePage =() => {
   
//     return (
//         <h1>This Is no to meal planning page </h1>
//     )
// }
import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import {Grid , Card} from "@material-ui/core"
// import { motion } from "framer-motion";
import {REACT_APP_SOME_API_KEY} from "../../index";
import { Link, useParams } from "react-router-dom";
 let name = "Mediterranean"
export function CuisinePage() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
   
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_SOME_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
  <Grid
  
  >
    {cuisine.map((item)=>{
      return(
        <Card key = {item.id}>
        <Link to={'/recipe/'+item.id}>
          <img src={item.image} alt=""/>
          <h4>{item.title}</h4>
          </Link>
        </Card>
      
      );
    })}
  </Grid>
  );
}


// const Grid = styled(motion.div)`
// display : grid;
// grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
// grid-gap:3rem;
// `;

// const Card = styled.div`
// img{
//   width :100%;
//   border-radius:2rem;

// }
// a{
//   text-decoration:none;
// }
// h4{
//   text-align:center;
//   padding:1rem;

// }



