import React from 'react';
// import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Menu from './Components/Navbar/Menu';
import Footer from './Components/FooterNew';
import Home from './Components/Navbar/Home';
import Aboutus from './Components/Navbar/Aboutus';
import Contact from './Components/Navbar/Contact';
import Services from './Components/Navbar/Services'
import Logos from './Components/Design/OskarLogo';
import Offer from './Components/Navbar/Offer';
import ProjectDetails from './Components/Film/ProjectDetails';


function App() {
  return (
    <React.Fragment>
      <Router>
       <div className="App">
        <div className="NavMenuOskar"> 
         <Menu/>
         <Logos/>
        </div>
          <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/services/videos/:i" component={ProjectDetails}/>
                  <Route path="/aboutus" component={Aboutus}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/services" component={Services}/>
                  <Route path="/offer" component={Offer}/>
                  
          </Switch>
         <Footer/>
        </div>
      </Router>
      </React.Fragment>

  );
}

export default App;
