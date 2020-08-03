import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

export class MenuOpen extends Component {
    constructor(props){
        super(props);
        this.OpenMenuMob = document.querySelector('OpenMenuMob');
        this.ClosemenuMob = document.querySelector('ClosemenuMob');

       
    }
   

    componentDidUpdate(){
        if(this.props.opened === false){
            anime({
                targets: '.ListingNew li',
                translateX: '100%',
                delay: anime.stagger(400, {start: 300, easing: 'easeOutQuad'})
            })
        }
        else {
            console.log("Zamknięte :D");
        }
    }
    render() { 
        
       if(this.props.opened === false){
        return (
            <div className="OpenMenuMob">
            <nav>
                <ul className="ListingNew">
                    <li className="NavMenMob" ><Link to='/'>Strona Główna</Link> </li>
                    <li className="NavMenMob" ><Link to='/aboutus'>O Nas</Link></li>
                    <li className="NavMenMob" ><Link to='/services'>Portfolio</Link></li>
                    <li className="NavMenMob" ><Link to='/offer'>Oferta</Link></li>
                    <li className="NavMenMob" ><Link to='/contact'>Kontakt</Link></li>
                   
                </ul>
            </nav>
            </div>
        )
    }
    else{
        return(
            <div className="ClosemenuMob"></div>
        )
    }
    }
}

export default MenuOpen
