import React, { Component } from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import Gif from './gifslubart2.gif';


 
class FilmFront extends Component {

constructor(props){
  super(props);
  this.state = {
      load: false
  }
  this.kamila.bind(this);
}
  kamila(){
   let hide = document.getElementById('Huhu');
   hide.style.display = 'none';
  }


  componentDidMount(){
    if(this.kamila){
      this.setState({
        load: true
      })
    }
   
  }
  
  
  render () {


  
   if(window.onload){ return <div className="loadingMovie">Ładuje Strone</div>}
   else{return(
      <div className="MovieSpace"> 
       <div className="LoadMov" id="Huhu">
             <img src={Gif} alt="load" className="ZaladujGifa" />
       </div>
       <YouTubePlayer
         className="OscMov"
         controls='0'
         width='100%'
         height='100%'
         url='https://www.youtube.com/watch?v=ImCoXO4BA2g'
         muted
         volume="1"
         loop= "1"
         enablejsapi="1"
         rel="0"
         cc_load_policy="1"
         frameborder="0"    
         showinfo="0"
         modestbranding="1"
         disablekb="1" 
         iv_load_policy="3"
         playing
         onPlay={this.kamila}
        //  pip={false}  
      // Other ReactPlayer props will work here
    />

</div>
    )
    }
   
  }
}

export default FilmFront