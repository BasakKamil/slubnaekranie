import React, { Component } from 'react';
import LogoVimeo from '../Components/Design/vimeo.png';
import LogoInsta from '../Components/Design/vimeo2.png';
import Logoface from '../Components/Design/face.png';



export class Footer extends Component {
    render() {
        return (
            <div className="FooterBasi">
                <div className="LogoKamila row">
                   
                      <div className="col"></div>
                      <div className="col"><a href="https://vimeo.com/slubnaekranie"><img className="LogoVimeo" src={LogoVimeo} alt=""/></a></div>
                      <div className="col"> <p>Ślub na Ekranie 2020</p></div>
                      <div className="col"><a href="https://www.instagram.com/prevohouse"><img className="LogoInsta" src={LogoInsta} alt=""/></a></div>
                      <div className="col"><a href="https://www.facebook.com/slubnaekranie"><img className="LogoFace" src={Logoface} alt=""/></a></div>
                      
                </div>
            </div>
        )
    }
}

export default Footer
