import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import WritePage from "./components/WritePage";
import { Link, Route, Switch } from 'react-router-dom';
import "./App.css";


function App() {
  
  return (
      <div>
        <Route exact path='/'>
          <MainPage/>
        </Route>

        <Route path="/write">
          <WritePage/>
        </Route>
      </div>
  );
}

export default App;
