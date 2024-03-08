import React, {useState,useEffect} from 'react';
import { REACT_APP_SOME_API_KEY } from './index';
import Content from './Data/Recipe';
// import { keyframes } from "@material-ui/system';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ContainerIngredients from "./components/Ingredients"
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import HorizontalScroll from 'react-scroll-horizontal';
import Grid from '@material-ui/core/Grid';
import { Typography, 
          Container , 
          Collapse,
	List,
	ListItem,
          Box,Button } from '@material-ui/core';
import Congrp from './components/Congrp';
import image from "./images/topimage.jpg"
import Navbar from './components/NavBar/Navbar';
import SearchModal from './components/NavBar/searchBar';
// import ingredemo from "./images/Chow mein.jpg"
//this json daa used in rec con and the second json object usedun ingreeidents 
export var Rec_Con_list = [{
	'title':"Chinese Cuisine",
	'image1':"https://images.pexels.com/photos/5848492/pexels-photo-5848492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	'image2':"https://images.pexels.com/photos/18803177/pexels-photo-18803177/free-photo-of-plate-with-greasy-momos-dumplings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	'image3':"https://images.pexels.com/photos/8141461/pexels-photo-8141461.jpeg?auto=compress&cs=tinysrgb&w=600",
  'image4':"https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600",
	},{
	'title':"Thai Cuisine",
	'image1':"https://images.pexels.com/photos/12481161/pexels-photo-12481161.jpeg?auto=compress&cs=tinysrgb&w=600",
	'image2':"https://images.pexels.com/photos/12561895/pexels-photo-12561895.jpeg?auto=compress&cs=tinysrgb&w=600",
	'image3':"https://images.pexels.com/photos/12100417/pexels-photo-12100417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  'image4':"https://images.pexels.com/photos/6454806/pexels-photo-6454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},{
	'title':"Italian Cuisine",
	'image1':"https://images.pexels.com/photos/4543099/pexels-photo-4543099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	'image2':"https://images.pexels.com/photos/7432991/pexels-photo-7432991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	'image3':"https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600",
  'image4':"https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	},{
	'title':"Greek Cuisisne",
	'image1':"https://images.pexels.com/photos/772515/pexels-photo-772515.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	'image2':"https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	'image3':"https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  'image4':"https://images.pexels.com/photos/862949/pexels-photo-862949.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	
}]
export var ingredients_list = [{
	"title":"Fruits",
	"image":"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},{
	"title":"Flour",
	"image":"https://images.pexels.com/photos/6294375/pexels-photo-6294375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},{
	"title":"Fishes",
	"image":"https://images.pexels.com/photos/3650159/pexels-photo-3650159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},{
	"title":"Beef",
	"image":"https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},{
	"title":"Chicken",
	"image":"https://images.pexels.com/photos/6107731/pexels-photo-6107731.jpeg?auto=compress&cs=tinysrgb&w=600",
	},,{
	"title":"Vegetables",
	"image":"https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},,{
	"title":"spices and herbs",
	"image":"https://images.pexels.com/photos/458796/pexels-photo-458796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},,{
	"title":"Egg,milk and products",
	"image":"https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},,{
	"title":"Fats and oils",
	"image":"https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	
}]
const relevent_recipe = [{
  "title":"Fruits",
	"image":"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },{
  
    "title":"spices and herbs",
	"image":"https://images.pexels.com/photos/458796/pexels-photo-458796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},,{
	"title":"Egg,milk and products",
	"image":"https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},,{
	"title":"Fats and oils",
	"image":"https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },{
    'title':'biryani',
    'image':'https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },{
    'title':'kebabs',
    'image':'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  },{
    'title':'salads',
    'image':'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },{
    'title':'honey chilli potato',
    'image':'https://static.toiimg.com/thumb/52532656.cms?imgsize=498654&width=800&height=800'
  },{
    'title':'pancakes',
    'image':'https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }]
//
export default function Develop() {
  const classes = useStyles();
 const [open,setOpen] = React.useState(false);
 const [checked, setChecked] = React.useState(false);
 const handleClick = () => {
  setChecked((prev) => !prev);
};
  

  // function Rec_Con(props){
  
  //   return (
  //     <React.Fragment className={classes.con_varities}>
  //       <Box  className={classes.con_varities}>
  //        <Paper elevation={0} className={classes.rec_suggestions}>{props.image1} </Paper>
  //        <Paper elevation={0} className={classes.rec_suggestions}>{props.image2} </Paper>
  //        <Paper elevation={0} className={classes.rec_suggestions}>{props.image3} </Paper>
  //        <Paper elevation={0} className={classes.rec_suggestions}>{props.image4} </Paper>
  //       {props.title}
  //      </Box>
  //     </React.Fragment>
  //   )
  // }
  return (
    <Container disableGutters={true} maxWidth="xl" className={classes.root}>
      <Navbar className={classes.navbar}/>
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
          {/* <SearchModal className={classes.search_modal} /> */}
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
      <Container className={classes.rec_content}>
        <Typography className={classes.sec_Heading}>Based on your interests</Typography>
       
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} >
            <Content />
          </Grid>
          <Grid item xs={6} sm={3} >
            <Content />
          </Grid>
          <Grid item xs={6} sm={3} >
            <Content />
          </Grid>
          <Grid item xs={6} sm={3} >
            <Content />
          </Grid>
          
        </Grid>
      
      </Container>
      
      <Container fluid disableGutters={true} className={classes.ingre}>
        <Typography className={classes.sec_Heading}>Search by ingredients</Typography>
        

            <Container disableGutters={true} maxWidth="xl" className={classes.root}>
         		  <HorizontalScroll className={classes.parent}>{ingredients_list.map((item) =>(
           			 <Paper elevation={0}  style={{ backgroundImage: `url(${item.image})` , backgroundPosition:'center' }} className={classes.InPaper} onClick={handleClick}> </Paper>))}</HorizontalScroll>
                
                <Collapse in={checked}>
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                      <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                  </Paper>
                </Collapse>
          


	  </Container>
            
		
        
      </Container>
      <Box className={classes.con_suggestions}>
      <Typography className={classes.sec_Heading2}>More intresting choices</Typography>
        <Grid container 
        spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center">
        {Rec_Con_list.map((object)=>(
          <Grid item key={object.title} style={{maxWidth:328}} xs={3} >
              <div className={classes.con_varities}>
                  <Box  className={classes.con_varities}>
                      <Paper  style={{ backgroundImage: `url(${object.image1})` , backgroundPosition:'center',backgroundSize:'cover' }} elevation={0} className={classes.rec_suggestions}></Paper>
                      <Paper  style={{ backgroundImage: `url(${object.image2})` , backgroundPosition:'center', backgroundSize:'cover'}} elevation={0} className={classes.rec_suggestions}></Paper>
                      <Paper  style={{ backgroundImage: `url(${object.image3})` , backgroundPosition:'center', backgroundSize:'cover'}} elevation={0} className={classes.rec_suggestions}></Paper>
                      <Paper  style={{ backgroundImage: `url(${object.image4})` , backgroundPosition:'center', backgroundSize:'cover'}} elevation={0} className={classes.rec_suggestions}></Paper>
                      {object.title}
                  </Box>
              </div>
        </Grid>
        ))}
            {/* <Grid item xs={3} >
              <Rec_Con data={Rec_Con_list}/>
            </Grid>
            <Grid item xs={3}>
              <Rec_Con data={Rec_Con_list}/>
            </Grid>
            <Grid item xs={3}>
              <Rec_Con data={Rec_Con_list}/>
            </Grid>
            <Grid item xs={3}>
              <Rec_Con data={Rec_Con_list}/>
            </Grid> */}
        </Grid>
       
      </Box>
      <HorizontalScroll>
        <div className={classes.child} >
          <Paper elevation={0} className={classes.rec_relevent}></Paper>
        </div>
        <div className={classes.child} ></div>
        <div className={classes.child} ></div>
        <div className={classes.child} ></div>
      </HorizontalScroll>
    </Container>
  );
}
// const marqueeAnimation = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: 0,
      paddingRight:0,
    },
    navbar:{

    },
    parent:{
      // width:"30em",
      height:'22em !important',
      // background:"#bf1717",

    },
    banner_img:{
      padding:0,
      borderRadius: 12,
      border: '1px solid rgba(255, 255, 255, 0.125)',
      width :'100%',
      height :'100vh',
      maxHeight:735,
      maxWidth:659,
      objectFit:'cover',
      backgroundImage: 'url("https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886")',
      backgroundPosition: 'center',
      margin:'12px 0px 0px 0px',
      borderRadius:'0px 12px 12px 0px',
    },
    paper: {
      width :'104%',
      height :'100vh',
      margin:'-12px 0px 12px -13px',
      backdropFilter: 'blur(3px) saturate(125%)',
      WebkitBackdropFilter: 'blur(3px) saturate(125%)',
      backgroundColor: 'rgba(17, 25, 40, 0.14)',
      borderRadius: '0px 12px 12px 0',
      border: '0px solid rgba(255, 255, 255, 0.125)',
      textAlign: 'center',
      maxHeight:735,
      maxWidth:659,
      color: theme.palette.text.secondary,
    },
    rec_relevent:{
      border:'1px solid #fff',
      borderRadius:250,
      backgroundColor:'#f12342',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    text :{
      fontSize:"3.75rem",
      lineHeight: "1.2",
      color: "#fff",
      
      marginLeft :10,
        marginRight: 10,
      fontFamily : 'Coolvetiva',
      display: "inline-flex",
    },
    boxitem :{
      position:"absolute",
      marginTop: "5vh",
      textAlign:"left",
      padding:"8em 12em 8em 11em",
 },
 InPaper:{
  width:300,
objectFit:"cover",
objectPosition:"center center",
  margin:8,
  height:300,
  Animation: "bannermove 20s linear infinite",
  display:"inline-block",
  border: "0px solid #fff",
  backgroundSize:"cover",
  borderRadius:70,
},
  ingredientbox:{
    width:'20em',
    height:'22em',
    backgroundColor:'#fafafa',
    display:'block'
  },
    boxfont :{
      fontWeight : 900,
      display: 'contents',
    },
    toptext :{
      fontSize:"3.75rem",
      lineHeight: "1.2",
      marginLeft :10,
      fontFamily:"Coolvetica",
      marginRight: 10,
      display: "inline-flex",
      background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    secfont :{
      marginTop:10,
      fontFamily :'Noto Sans',
      fontWeight: "700",
    },
marquee_con:{
	whiteSpace:"nowrap",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      // animation: `${marqueeAnimation}  10s linear infinite`,
	},
	marquee_content:{
	 display: "inline-block",
      paddingRight: "100%",
	},
    search_modal:{

    },
    Heading:{
      marginTop:'3.4em',

      fontSize: 24,
      paddingLeft:8,
      fontFamily:'Coolvetica',
    },
    Headingsec:{
      marginTop:-12,

      fontSize: 24,
      paddingLeft:8,
      fontFamily:'Coolvetica',
    },
    rec_content:{
      marginTop:'4vh',
      paddingLeft:0,
      paddingRight:0,

    },
    rec_type_container:{
      display: 'flex',
      fontSize:16,
      marginBottom:'2vh',
      
    },
    rec_type_content:{
      height:360,
    },
    rec_content_scroll:{
      height :120,
    },
    rec_relevent:{
      height:114,
      backgroundColor:'#f32422',
      width:114,
      borderRadius:150,
    },
    child:{
      height:114,
      width:114,
      margin:4,
    },
    sec_Heading:{
      fontSize: '4rem',
      fontFamily:'Coolvetica',
      marginBottom:'3vh',
    },
    sec_Heading2:{
      fontSize: '4rem',
      fontFamily:'Coolvetica',
      marginBottom:'3vh',
    },
    
    rec_type:{
      padding:"4px 8px 4px 8px",
      fontSize: 16,
      color:'#2424249c',
      fontWeight:800,
      textTransform:"none",
      fontFamily:'Noto Sans Semibold',
    },
    scroll_contain:{
      // height:'24vh',
      marginTop:4,
      height:114,
      paddingRight:'1px !important',
      paddingLeft:'0px !important',
    },
    scroll_contain_grid:{
      height:120,
    },
    scroll_head:{
      height:'24vh',
    },
    con_suggestions:{
       justifyContent:'flex-end',
        display:'flex',
        flexWrap:'wrap',

    },
    con_varities:{
      justifyContent:'center',
      display:'flex',
      flexWrap:'wrap',
      marginTop:'2vh',
    },
    rec_suggestions:{
        height :128,
        width:128,
        margin:4,
        borderRadius:36,
        backgroundImage:'url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg")'
    },
    
  }),
);

