import { Box,Paper } from "@material-ui/core"
import React from "react"
import  ingredients_list from "../Develop"
// import {image} from ""
import image from "./ingredemo.jpg"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
export default function ContainerIngredients(props) {
    const classes = useStyles();
	const {title,image} = props.data;
    return (
        <Box className={classes.InBox}>
	    {/* eidt and fix the background image property json in develop  */}
            <Paper elevation={0}  style={{backgroundImage:`${image}`}}className={classes.InPaper} >
            </Paper>
	    {title}
        </Box>
    ) 
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    InBox:{
        display:"inline-block",
    },
    InPaper:{
        width:300,
	    objectFit:"cover",
        margin:8,
        height:300,
        border: "0px solid #fff",
        borderRadius:70,
    },
  })
)
