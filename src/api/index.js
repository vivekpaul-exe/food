import axios from "axios";
import {REACT_APP_SOME_API_KEY} from "../index"
const APIkey = REACT_APP_SOME_API_KEY;
const API = axios.create({
                            baseURL : `https://api.spoonacular.com/`
});

// json token to later tadd on the profile action 

// Recipe links 
export const fetchRecipe  = (id) => API.get(`/recipes/${id}/information?apiKey=${APIkey}`)
//  https://api.spoonacular.com/recipes/{id}/information
export const searchRecipes = (query, APIkey) => API.get(`/recipes/complexSearch?query=${query}?apiKey=${APIkey}`)
//  https://api.spoonacular.com/recipes/complexSearch

export const fetchByIngredients = (query, APIkey) => API.get(`/recipes/findByIngredients?query=${query}?apiKey=${APIkey}`)
export const fetchByNutrition = (query, APIkey) =>API.get(`/recipes/findByNutrients?query=${query}?apiKey=${APIkey}`)
export const similarRecipes   = (query ,APIkey) => API.get(`/recipes/${query}/similar?apiKey=${APIkey}`)
export const getRandomRecipes  = ( APIkey) => API.get(`/recipes/random?apiKey=${APIkey}`)


// Misc 
export const foodJoke  = ( APIkey) => API.get(`/food/jokes/random?apiKey=${APIkey}`)
export const foodTrivia  = ( APIkey) => API.get(`/food/trivia/random?apiKey=${APIkey}`)
