import React from "react"


import  { Container  , Grow} from "@material-ui/core"
import Home from "./components/Home"


import StickyFooter from "./components/Footer";
export const Mainapp = () => {

   

    return (
        <Container className = "box_con" maxWidth="lg" style={{marginTop  :  '4px'}} >
          <Grow in>

                <Home />



          </Grow>
                <StickyFooter />

        </Container>
    )
}

