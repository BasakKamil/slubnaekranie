import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuTwo from '../Film/MenuTwo';
import anime from 'animejs';



export class Menu extends Component {
    constructor(props){
        super(props);
        this.basi= this.basi.bind(this);
        this.state = {
            
        }

    }

    basi = () =>{
        
        anime({
            targets: '.NavMen1',
            easing: 'easeInOutQuad',
            scale: [1,2,1],
            delay: anime.stagger(100, {start: 50})
          }); 
      
    }
    basi1 = () =>{
        
        anime({
            targets: '.NavMen2',
            easing: 'easeInOutQuad',
            scale: [1,2,1],
            delay: anime.stagger(100, {start: 50})
          }); 
      
    }

    basi2 = () =>{
        
        anime({
            targets: '.NavMen3',
            easing: 'easeInOutQuad',
            scale: [1,2,1],
            delay: anime.stagger(100, {start: 50})
          }); 
      
    }

    basi3 = () =>{
        
        anime({
            targets: '.NavMen4',
            easing: 'easeInOutQuad',
            scale: [1,2,1],
            delay: anime.stagger(100, {start: 50})
          }); 
      
    }

    basi4 = () => {
        anime({
            targets: '.NavMen5',
            easing: 'easeInOutQuad',
            scale: [1,2,1],
            delay: anime.stagger(100, {start: 50})
          }); 

    }


   componentDidMount(){

    
   }

    render() {
        return (
            <div className="MenuKamilB">
            <div className="HideOsc">
            <nav>
                <ul>
                    <li className="NavMen1" onClick={this.basi}><Link to='/'>Strona Główna</Link> </li>
                    <li className="NavMen2" onClick={this.basi1}><Link to='/aboutus'>O Nas</Link></li>
                    <li className="NavMen3" onClick={this.basi2}><Link to='/services'>Portfolio</Link></li>
                    <li className="NavMen5" onClick={this.basi4}><Link to='/offer'>Oferta</Link></li>
                    <li className="NavMen4" onClick={this.basi3}><Link to='/contact'>Kontakt</Link></li>
                   
                </ul>
            </nav>
            </div>
            <div className="MenuKamilBTwo">
            <MenuTwo/>
            </div>
            </div>
        )
    }
}

export default Menu
