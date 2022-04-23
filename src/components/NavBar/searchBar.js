import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios"
import {v4 as uuidv4} from "uuid"
import {  Container, Box,ButtonBase,CircularProgress,InputBase } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon  from "@material-ui/icons/Search"
import Grow from '@material-ui/core/Grow';
import {Card , Button , Typography, CardActionArea,CardActions,CardContent,CardMedia} from "@material-ui/core"
import {REACT_APP_SOME_API_KEY} from "../../index"

import SearchList from './SearchList';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'baseline',
    marginTop:"5vh",
    justifyContent: 'center',
  },
  Search:{
    marginLeft:15,
    
  },
  searchbutton:{
    color:"#424242",
    padding:12,
  },
  searchTag:{
    color:"#424224",
    paddingLeft: 4,
  },
  reslist:{
    overflowY:"scroll",
    height :"65vh",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #fff',
    borderRadius: 15,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SearchModal() {
  const classes = useStyles();
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [results_no,setResults_no] = React.useState(0)
  const [show , setShow] = React.useState(false);

  const url =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${REACT_APP_SOME_API_KEY}`;

  const getData = async() => {
    if (query !== ""){
      const result  = await Axios.get(url);
      if(result.data.more){
        console.log("No Food FOUND!!!")
      }
     
      setRecipes(result.data.results)
      setResults_no(result.data.number)
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
    getData()
    setShow(true);
    
  };

  
  const handleOpen = () => {
    setOpen(true)
    setShow(false);
  };

  const handleClose = () => {
    setOpen(false);
    setRecipes([]);
    setResults_no(0);
    setShow(false);
  };

  return (
    <div className ={classes.Search}>
      <ButtonBase className = {classes.searchbutton} type="button" onClick={handleOpen}>
        <SearchIcon />
        <Typography className={classes.searchTag}>
          Search 
        </Typography>

      </ButtonBase>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box>
          <form onSubmit={OnSubmit} className = {classes.searchForm}>
          <div className={classes.paper}>
            
            <InputBase
              className={classes.margin}
              placeholder="search your intrests"
              onChange={OnChange}
              value={query}
              autoComplete="off"

              inputProps={{ 'aria-label': 'naked' }}
            />
          </div>
          </form>
            <Typography>{results_no} recipes found!</Typography>
             {/* CArd Comtainer will be shifted to sparate field after the 
             sucessfull ui implement */} <Grow in>
                      <Box  className={classes.reslist}>
                       
                        {recipes?.map(recipe => 
                        <Grow in>
                        <SearchList 
                         
                          key={uuidv4()} 
                          title={recipe.title}  
                          img={recipe.image} 
                          /></Grow>)}
                          
                          </Box>
                          </Grow>
                  </Box>
        </Fade> 

      </Modal>
    </div>
  );
}


