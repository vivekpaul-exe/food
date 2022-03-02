// 48rem width Modal
import Axios from "axios"
import {v4 as uuidv4} from "uuid"
import React,  {useState , useEffect} from "react"
import { ThemeProvider, Div, Button, Modal, Icon, Text , Dropdown , Anchor ,Input ,Row , Col } from "atomize";
import { REACT_APP_SOME_API_KEY } from "../../index"
import dotenv from "dotenv"
import RecipeModal from "./RecipeModal";
dotenv.config();


const ModalSize = ({ handleSubmit, recipes, handleChange,query,isOpen, onClose ,isLoading, setIsLoading}) => {
  return (
    <ThemeProvider theme={theme}>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="48rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
       {/* <Div


      shadow="4"
      rounded="lg"
      // d="flex"
      align="center"
      justify="center"
      textColor="medium"
    > */}
     <form onSubmit={handleSubmit} className="search-form">
    <Div
      p={{ xs: '1rem', md: '4rem' }}
    >

        <Input
        placeholder="Loading on Search"
        fontFamily="secondary" textSize="heading"
        rounded="4rem"
        p={{l : '2rem'}}
        h = "4rem"
        value={query}
        OnChange={handleChange}
        outline="none"
        prefix ={
          <Button
          h="4rem"
          w="4rem"
          bg="white"
          hoverBg="white"
          rounded="circle"

          shadow="2"
          hoverShadow="4"
        > <Icon name="Plus" size="24px" />

         </Button>
        }
        suffix={
          <Div

            m={{ r: "1rem" , l:'1rem' }}
            shadow="4"
            rounded="4rem"
            // d="flex"
            align="center"
            justify="center"
            textColor="medium"
    >
          <Button
          h="4rem"

          onSubmit={handleSubmit}
          w="4rem"
          bg="white"
          hoverBg="white"
          rounded="circle"

          shadow="2"
          hoverShadow="4"
        >
          <Icon

              name={isLoading ? "Loading" : "Search"}
              color={isLoading ? "gray900" : "black"}
              size="24px"
            />
        </Button></Div>
        }
      />
    </Div>
      </form>
    <Div >

    </Div>
      <Div d="flex" justify="flex-end">
          {recipes?.map(recipe => <RecipeModal key={uuidv4()} recipe={recipe} />)}
      </Div>
    </Modal>
    </ThemeProvider>
  );
};

function SearchModal (){
 
  const [showModal , setShowModal] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [showDropdown , setShowDropDown] = useState(false);
  const [query , setQuery] = useState('');
  const [recipes ,setRecipes] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      getData();
    };
    const handleChange = e => this.setQuery(e.target.value )
    // const { showModal } = this.state;
    // const { isLoading } = this.state;
    // const { showDropdown } = this.state;

    const url =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${REACT_APP_SOME_API_KEY}`;

    const getData = async() => {
      if (query !== ""){
        const result  = await Axios.get(url);
        if(result.data.more){
          console.log("No Food FOUND!!!")
        }
        console.log(result);
        setRecipes(result.data.hits);
        setQuery("");
    console.log(result)
      }else {
        window.alert("Nothing has been enterred")
      }
    };
        // .then(data => console.log(data))
    return (
      <>
        <Button
          bg="transparent"
          color="#424242"
          hoverBg="transparent"
          m={{ r: "0.5rem" }}
          width="inherit"
          onClick={() =>
            setShowModal( true )
          }
        >
       {/* <Icon name="search" color="white" size="24px"/> */}
       <Icon name="Search" size="24px" color="white" />
                What's On your mind...
        </Button>
        <ModalSize
          isLoading={isLoading}
          nChange={handleChange}
          onSubmit={handleSubmit}
          isOpen={showModal}
          onClose={() => setShowModal( false )}
        />
      </>
    );
  
}



const theme = {
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  },
  fontFamily: {
    primary: "equity-text, serif",
    color: "#212121",
  }
};
export default SearchModal;
