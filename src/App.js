import { useState } from 'react';
import './App.css';
import {Routes } from 'react-router';
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Page from './Page';
import Don from './Don';
import {createContext } from 'react';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Form } from './Form';


export const AppContext=createContext();
function App() {
const [name, setname] = useState("");
const client= new QueryClient();
return(
  <div className='App'>
    <QueryClientProvider  client={client}>
    <AppContext.Provider value={{name,setname}}>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page" element={<Page/>}/>
      <Route path="/don" element={<Don/>}/>
      <Route path="/form" element={<Form/>}/>
  </Routes>
  </Router>
  </AppContext.Provider>
  </QueryClientProvider>
  </div>
  

)
}

export default App;
