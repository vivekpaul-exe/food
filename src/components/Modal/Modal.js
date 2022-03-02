import React from 'react';
import {useStyles} from "./styles"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Button } from "@material-ui/core"
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import dotenv from "dotenv"
dotenv.config();
export default function RecipeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
    // const [ recipecard ,setRecipeCard] = useState({data});
    
    // async function getRecipeCard(){
    //     const apiKey = process.env.API_KEY;
    //     const url = `https://api.spoonacular.com/recipes/641166/nutritionLabel?apiKey=${apiKey}`;


    //     const response = await fetch(url);
    //     const data = response.text();
    //     setRecipeCard(data);
    // }
  
  const handleOpen = () => {
   
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" type="button" onClick={handleOpen}>
        Test Modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <Button onClick={handleClose} ><CloseRoundedIcon/></Button>
            <h2 id="transition-modal-title">Transition modal</h2>
          
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
