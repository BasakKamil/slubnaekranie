import React, { Component } from 'react';
import LogoVimeo from '../Components/Design/vimeo.png';
import LogoInsta from '../Components/Design/vimeo2.png';



export class Footer extends Component {
    render() {
        return (
            <div className="FooterBasi">
                <div className="LogoKamila">
  
                      <p className="col-md-4"><a href="https://vimeo.com/slubnaekranie"><img className="LogoVimeo" src={LogoVimeo} alt=""/></a></p>
                      <p className="col-md-4"> Ślub na Ekranie 2020</p>
                      <p className="col-md-4"><a href="https://www.instagram.com/prevohouse/"><img className="LogoInsta" src={LogoInsta} alt=""/></a></p>
                      
                </div>
            </div>
        )
    }
}

export default Footer
