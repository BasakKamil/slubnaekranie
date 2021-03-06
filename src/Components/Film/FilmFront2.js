import React, { Component } from 'react';
import Gif from './gifslubart2.gif';
import ReactPlayer from 'react-player';

 
class FilmFront extends Component {

constructor(props){
  super(props);
  this.state = {
      load: false,
      urlmovie: "https://www.youtube.com/embed/ImCoXO4BA2g"
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
   
    const width = window.innerWidth;
    const height = window.innerHeight;

  
   if(window.onload){ return <div className="loadingMovie">Ładuje Strone</div>}
   else{return(
      <div className="MovieSpace"> 
       <div className="LoadMov" id="Huhu">
             <img src={Gif} alt="load" className="ZaladujGifa" />
       </div>
    
         
     <ReactPlayer 
                url={this.state.urlmovie} 
                controls={false}
                width={width}
                height={height}
                muted
                modestbranding="1"
                className="OscMov"
                enablejsapi="1"
                playing
                rel="0"
                cc_load_policy="1"
                frameborder="0" 
                showinfo="0"
                volume="1"
                loop= {true}
                onPlay={this.kamila}
                />

</div>
    )
    }
   
  }
}

export default FilmFront