import React, { Component } from 'react';
import axios from 'axios';
import Gif from './gifslubart2.gif';
import anime from 'animejs';
import {Link} from 'react-router-dom';


const CLIENT_IDENTIFIER = "b65e1104345443d5cebe70d828eb287ef5e02842";
const CLIENT_SECRET = "bZwxmx48EbRyDcKqEUyVD9gAM+2cFWvr4BCTJN7VIH4psTDtyW36pPHgEj4XyCU1oS+TS7rxjbUEfZLRg25ZeK1niZ+pfjHYffFPIeX8xvtlHXMHDuZmKnbeGOjkmpiO";


            class Apicall extends Component {

              state = {
                  vimeo: [],
                  leng: '',
                  pictures: [],
                  i:[],
                  width:'',
                  height:''
              };    

              async getVideosForChannel(access_token) {
                 const { data } = await axios.get(
                         "https://api.vimeo.com/users/slubnaekranie/videos",
                             {
                                  headers: {
                                     Authorization: `Bearer ${access_token}`
                                  }
                             }
                     );
                // console.log(data);
                 this.setState({ vimeo: data.data, leng: data.total});
            

      }
        

         async componentDidMount() {
            // const dat = "ae30b4a44d981c016e2ea1b18a7fdbcf";
            const { data } = await axios.post(
                "https://api.vimeo.com/oauth/authorize/client",
             { grant_type: "client_credentials" },
           {
           auth: {
              username: CLIENT_IDENTIFIER,
              password: CLIENT_SECRET
            }
          }
         );

      this.getVideosForChannel(data.access_token);
    
     
    
  }

  componentDidUpdate(){
    anime({
      targets: '.KamilMov li',
      translateX: '100%',
      delay: anime.stagger(500, {start: 800, easing: 'easeOutQuad'})
    });
  }


componentWillMount(){
  const width = window.innerWidth;
  const height = window.innerHeight;
  this.setState({
    width: width,
    height: height
  })

}


render() {


  const kamcia = {
    width: this.state.width,
    height: this.state.height,
    background: 'white'
  }



  
   
   if(this.state.vimeo.length === 0) return <div className="Mega" style={kamcia}><div className="WaitLoadKamil">Poczekaj na załadowanie Filmów :D
   <p className="LoadSlub"><img src={Gif} alt="loading..." /></p>
   </div></div>
 
    return (
         <div className="Mega">
          
           <ul className="KamilMov">
        
            {this.state.vimeo && this.state.vimeo.map(function(vimeomov,i) {
                return(
            
                <li className="showmov">
               
                  <Link to={'/services/videos/' + i} key={i} >
                    <h2 className="nameh3">{vimeomov.name}</h2>
                    <img src={vimeomov.pictures.sizes[3].link} alt=''/>
                  </Link>
                </li>


     
 

                
                )
               
              
                })}
           </ul>
         </div>
    );
    
   }
 }

   export default Apicall;