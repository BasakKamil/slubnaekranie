import React, { Component } from 'react';
import LogoVimeo from '../Components/Design/vimeo.png';
import LogoInsta from '../Components/Design/insta.png';
import Logoface from '../Components/Design/face.png';


export class FooterNew extends Component {
    render() {
        return (
           
<footer class=" FooterBasi page-footer special-color-dark pt-1 pb-1">

 
  <div class="container">


    <ul class="row LogoKamila">
      <li class="col-sm-4">
        <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/slubnaekranie">
          <img src={Logoface} alt="" className="LogoFace"/>
        </a>
      </li>
      <li class="col-sm-4">
        <a class="btn-floating btn-tw mx-1" href="https://www.instagram.com/prevohouse">
        <img src={LogoInsta} alt="" className="LogoInsta"/>
        </a>
      </li>
      <li class="col-sm-4">
        <a class="btn-floating btn-gplus mx-1" href="https://vimeo.com/slubnaekranie">
        <img src={LogoVimeo} alt="" className="LogoVimeo" />
        </a>
      </li>
      
      
    </ul>
  

  </div>


  
  <div class="footerstyle footer-copyright text-center py-2">© 2020 Ślub na Ekranie

  </div>


</footer>

        )
    }
}

export default FooterNew
