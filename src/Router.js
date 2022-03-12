import React from "React "

import {BrowserRouter as Router,
        Switch,
        Route,
        Link,

        } from "react-router-dom"
import StickyFooter from "./components/Footer"

import Home from "./components/Home"
import RecipeModal from "./components/Pages/RecipeModal"

const routes = [
    {
        path : "/Home",
        component: Home
    },
    {
        path : "/details",
        component : InfoPage
    },
    {
        path : "/search",
        component : RecipeModal
    }

]
export default function RouteConfig(){
    return (
        <Router>
             <Navbar />
             <Switch>
                 {routes.map((route,i) => (
                     <RouteWithSubRoutes key={i} {...route} />
                 ))}
             </Switch>
             <StickyFooter/>
        </Router>
       
    )
}
function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }