import React from "react"

import {Container , Typography, Box , Grid} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';
// import image from "./top.jpg"
import dotenv from "dotenv"
dotenv.config();
export default function  Containertop() {
  
  
  const classes = useStyles();
  // Add the container top to two variables first dex menu second mobile menu

  return (
    <Box className={classes.box1}>
  
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6} className={classes.banner_img} >
          <Paper elevation={0} className={classes.paper} src={image} >
          <Box className={classes.boxitem}>
          <Typography className={classes.text}  >
            <Box  className={classes.boxfont}>One should
              </Box>    </Typography>
            <Typography className={classes.toptext}  >
            <Box  className={classes.boxfont}> eat
              </Box>   </Typography>
              <Typography className={classes.text} >
                <Box  className={classes.boxfont}> to
                </Box>    
              </Typography>
            <Typography className={classes.toptext}  >
            <Box  className={classes.boxfont}> live
              </Box>   
              </Typography>
              <Typography className={classes.text} >
              <Box  className={classes.boxfont}> , not 
              </Box>    </Typography>
            
             <Typography className={classes.toptext}  >
             <Box  className={classes.boxfont} >live
              </Box>    </Typography>  
              <Typography className={classes.text} >
                <Box  className={classes.boxfont}> to 
              </Box>   </Typography>
             <Typography className={classes.toptext}  >
             <Box  className={classes.boxfont}> eat
              </Box>   </Typography>
              <Typography className={classes.text} >.</Typography>
              <Box className ={classes.secfont} fontSize={25}  >Find Everthing you want About different foods and their Nutrients.</Box>
          
            </Box>
          
             {/* <img  className={classes.banner_img} alt="complex" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg" /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper_content}>
          
            <Typography className={classes.Heading}>
              Recommended
            </Typography>
            <Box className={classes.rec_type_container}>
              <Button className={classes.rec_type}>Vegeterian</Button>
              <Button className={classes.rec_type}>Non-vegeterian</Button>
              <Button className={classes.rec_type}>Gluten free</Button>
              <Button className={classes.rec_type}>Seafood</Button>
            </Box>
            <Grid container spacing={1} className={classes.rec_type_content}>
                <Grid item xs={12} sm={6} >
                  <Content />
                </Grid>
                <Grid item xs={12} sm={6} >
                 <Content />
                </Grid>
            </Grid>
            <Typography className={classes.Headingsec}>People near you</Typography>
            <Container className={classes.scroll_contain}>
            <Grid item className={classes.scroll_contain_grid}>
                <HorizontalScroll className={classes.rec_content_scroll}>
                  {relevent_recipe.map((object)=>(
                    <div className={classes.child} key={object.title} >
                      <Paper elevation={0} style={{ backgroundImage: `url(${object.image})` , backgroundSize:'cover' }} className={classes.rec_relevent}></Paper>
                    </div>
                  ))}
                    
                    
                </HorizontalScroll>
              </Grid>

            </Container>
          </Paper>
        </Grid>
        
      </Grid>
    </Box>
  )
}


const useStyles = makeStyles((theme) => ({
  box1:{
    marginTop:"1vh",
    background :"#ffffff",
  },
  text :{
    fontSize:"3.75rem",
    lineHeight: "1.2",
    color: "#242424",
    marginLeft :10,
	    marginRight: 10,
    fontFamily : 'Coolvetiva',
    display: "inline-flex",
  },
  boxfont :{
    fontWeight : 900,
    display: 'contents',
  },
  toptext :{
    fontSize:"3.75rem",
    lineHeight: "1.2",
    marginLeft :10,
    marginRight: 10,
    display: "inline-flex",
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  secfont :{
    marginTop:10,
    fontFamily :'Signika Negative',
    fontWeight: "700",
  },
  head: {
    height:500,
  },
  svg1 :{
    height :"inherit",
    float: "right",
  },
  griditem:{
	  maxHeight: "-webkit-fill-available",
  },
  boxitem :{
       position:"absolute",

    marginTop: "5vh",
  },
  boxitem1 :{
    height :550,
   
    fontWeight: 800,
  },
  img: {
    width:700,
    borderRadius : 25,
   objectFit: "cover",
   position:"absolute",
   backdropFilter :"blur(2px)",
   height:"100vh",
       
  },
}));
