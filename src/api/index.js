import axios from "axios";
import {REACT_APP_SOME_API_KEY} from "../index"
const key = REACT_APP_SOME_API_KEY;
const API = axios.create({
                            baseURL : 'https://api.spoonacular.com/'
});

// json token to later tadd on the profile action 

// Recipe links 
export const fetchRecipe  = (id ,key) => API.get(`/recipes/${id}/information?apiKey=${key}`)
//  https://api.spoonacular.com/recipes/{id}/information
export const searchRecipes = (query, key) => API.get(`/recipes/complexSearch?query=${query}?apiKey=${key}`)
//  https://api.spoonacular.com/recipes/complexSearch

export const fetchByIngredients = (query, key) => API.get(`/recipes/findByIngredients?query=${query}?apiKey=${key}`)
export const fetchByNutrition = (query, key) =>API.get(`/recipes/findByNutrients?query=${query}?apiKey=${key}`)
export const similarRecipes   = (query ,key) => API.get(`/recipes/${query}/similar?apiKey=${key}`)
export const getRandomRecipes  = ( key) => API.get(`/recipes/random?apiKey=${key}`)


// Misc 
export const foodJoke  = ( key) => API.get(`/food/jokes/random?apiKey=${key}`)
export const foodTrivia  = ( key) => API.get(`/food/trivia/random?apiKey=${key}`)
