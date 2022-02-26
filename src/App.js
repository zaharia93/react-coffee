import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import CookieConsent from "react-cookie-consent";


function App() {

const [{}, dispatch] = useStateValue();
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged((authUser) => {
   if (authUser) {
    dispatch({
      type: "SET_USER", 
      user: authUser,
    });
   } else {
    dispatch ({
      type:"SET_USER",
      user: null,
    });
   }
 });

 return () => {
   unsubscribe();
 }

}, []);


  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route> 

         <Route path="/">
           <Header />
           <Home />
          
           
           </Route>
        </Switch>
        <CookieConsent debug={true}
        location="bottom"
        style={{ background:'#000', textAlign:"left"}}
        buttonStyle={{ color: "#4e223b", fontSize: "13px" }}
        expires={150}
        
        >This site uses cookies.</CookieConsent>
      </div>
    </Router>
  );
}

export default App;
