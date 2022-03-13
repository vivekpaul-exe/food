import React from "react"

import {BrowserRouter as Router,
        Routes,
        Route,
       

        } from "react-router-dom"
import StickyFooter from "./components/Footer"
import Navbar from "./components/NavBar/Navbar"
import Home from "./components/Home"
import { CuisinePage } from "./components/Pages/CuisinePage";
import { InfoPage} from "./components/Pages/InfoPage"
import  { RecipePage } from "./components/Pages/RecipePage"
import {WinePage} from "./components/Pages/Wines"
import  { ItemList } from "./components/Pages/ItemList"
import { IngredientsPage } from "./components/Pages/IngredientsPage";



export default function RouteConfig(){
    return (
        <Router>
             <Navbar />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/Cuisines" element={<CuisinePage />} />
                <Route path="/wines" element={<WinePage />} />
                <Route path="/itemspage" element={<ItemList />} />
             </Routes>
             <StickyFooter/>
        </Router>
       
    )
}
