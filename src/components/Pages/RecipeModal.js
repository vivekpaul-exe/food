import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop'
import { Typography, Box} from "@material-ui/core"
import Fade from '@material-ui/core/Fade';
import axios from "axios"
import {REACT_APP_SOME_API_KEY} from "../../index"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img : {
    width: "23vw",
    border : "1px solid #000",
    display : "block",
    margin: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    height : "90vh",
    width: "min-content",
    borderRadius : "1em",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RecipeModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [imgurl ,setImgurl ] = React.useState('');
  
  // console.log(_id , "ID")
  // console.log(num , "num");
  const handleOpen = () => {
    getCard();
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const getCard =  async() => {
    
    const id = (props.id);
    const url = `https://api.spoonacular.com/recipes/${id}/card?apiKey=${REACT_APP_SOME_API_KEY}`;
  
   
     const  response = await axios.get(url);

      

    console.log(response,  "Here !!!");
    setImgurl(response.data.url);
    return response;

}
  return (
    <div>
      <Box type="button" onClick={handleOpen}>
        view card 
      </Box>
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
          <div className={classes.paper}>
            <h2 id="transition-modal-title"> Recipe Card</h2>
            {imgurl ?              <img className ={classes.img} src={imgurl} alt ="It Shoould Be here" /> 
                  //  Else Just Render Something else 
                  :
                  <Typography>IF WE NOthing</Typography>
              
            }

            <p id="transition-modal-description">You got me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
