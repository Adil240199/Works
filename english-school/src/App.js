import React from 'react';
import './styles/style.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sign from './components/Sign'
import {BrowserRouter,
        Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className='container'>
    <Header/>
    <div className='app_wrapper_name'>
     <Route path='/main' component={Main} />
       <Route path='/Sign' component={Sign} />
     </div>
    <Footer/>
    </div>
  
  </BrowserRouter>
  );
}

export default App;
