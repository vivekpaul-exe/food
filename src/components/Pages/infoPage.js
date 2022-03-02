import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography , IconButton,
    Box    } from  "@material-ui/core"
    import axios from "axios"
    import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./info.css"
import {REACT_APP_SOME_API_KEY} from "../../index"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto",
    
  },
  head :{
    display:"contents",
    fontSize:"1.2rem",
      fontFamily:"Signika Negative",
    fontWeight:"600",
    fontFamily:"Me"
  },
  backbtn:{
      marginRight:"2rem",
      marginBottom:"0.5rem",
      
  },
  paper: {
      height: "90vh",
    width : "90vw",
    backgroundColor: theme.palette.background.paper,
    border: '0x solid #000',
    borderRadius : "1em",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  box :{
    overflowY:"scroll",
    height: "75vh",
  },
}));

export default function InfoModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data , setData] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
    getIngredients();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getIngredients = async()  => {

    const id = (props.id);
    const url = `https://api.spoonacular.com/recipes/${id}/nutritionWidget?apiKey=${REACT_APP_SOME_API_KEY}`;
  
   
     const  response = await axios.get(url);
     setData(response.data)
     console.log(response , "Info modal")
  }
  return (
    <div>
      <Box type="button" onClick={handleOpen}>
        Ingrdients amount 
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
      <Box>
      <IconButton className = {classes.backbtn} onClick={handleClose}>
              <ArrowBackIosIcon />
           </IconButton>      
      <Box className ={classes.head}>Ingredients</Box>
            
      </Box>
            <Box className = {classes.box}>
                <Typography  dangerouslySetInnerHTML={{__html: data}} > 

                </Typography>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
