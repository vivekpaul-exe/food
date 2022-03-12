import React,{useState} from "react"
import Axios from "axios"
import {v4 as uuidv4} from "uuid"
import SearchList from "./SearchList"
import dotenv from "dotenv"
import { Input, Icon } from "atomize";

dotenv.config();

export default function Searchbar() {
  const [query , setQuery] = useState("");
  const [recipes ,setRecipes] = useState([]);
  // const [alert,setAlert] = useState("");

  
  const apiKey = process.env.API_KEY;

  const url =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;


  const getData = async() => {
    if (query !== ""){
      const result  = await Axios.get(url);
      if(result.data.more){
        console.log("No Food FOUND!!!")
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");

    }else {
      window.alert("Nothing has been enterred")
    }
  };


  const OnChange = (e) => {
    setQuery(e.target.value)
  }


  const OnSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <>
    <form onSubmit={OnSubmit} className="search-form">
      {/*alert !== "" && <Alert alert={alert} />*/}
      <Input
        type="text"
        name="query"
        onChange={OnChange}
        value={query}

        autoComplete="off"
        placeholder="Search Food"
        suffix = {
          <Icon
          size="20px"
          cursor="pointer"
          onClick={() => console.log("clicked")}
          pos="absolute"
          top="50%"
          right="1rem"
          transform="translateY(-50%)"
          />
        }
      />
      
    </form>
    <div className="recipes">
        {recipes?.map(recipe => <SearchList key={uuidv4()} recipe={recipe} />)}
      </div>
    </>
  )

}
