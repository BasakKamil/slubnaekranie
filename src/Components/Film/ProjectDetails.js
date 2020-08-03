import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Gif from './gifslubart2.gif';


const CLIENT_IDENTIFIER = "b65e1104345443d5cebe70d828eb287ef5e02842";
const CLIENT_SECRET = "bZwxmx48EbRyDcKqEUyVD9gAM+2cFWvr4BCTJN7VIH4psTDtyW36pPHgEj4XyCU1oS+TS7rxjbUEfZLRg25ZeK1niZ+pfjHYffFPIeX8xvtlHXMHDuZmKnbeGOjkmpiO";


class ProjectDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            vimeos: [],
            name: '',
            url: '',
            info: ''
        }
        this.kamis.bind(this);
       
    }

  


    async getVideosForChannel(access_token) {
        const {id} = this.props;
        console.log(id);
        const { data } = await axios.get(
                "https://api.vimeo.com/users/slubnaekranie/videos",
                    {
                         headers: {
                            Authorization: `Bearer ${access_token}`
                         }
                    }
            );
       const d = data.data;
       const mov = d[id];
       console.log(mov);
       this.setState({ name: mov.name, url: mov.link, info: mov.description});
   

    }

    async componentDidMount() {
   
 
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

    kamis(){
        let hide = document.getElementById('Movs');
        hide.style.display='none';
    }

    render(){
       
        const name = this.state.name;
        const url = this.state.url;
        const info = this.state.info;
   if(this.state.name===''){
       return(
           <div className="GifMovCart">
           <img className="Gifek" src={Gif} alt=""></img>
           </div>
       )
   }
   else return(
    <div  className="cartMov">
       
        <h2>{name}</h2>
        <div className="split">
        <div className="LoadMoviesPart" id="Movs">
             <img src={Gif} alt="load" className="ZaladujGifa" />
       </div>
        <ReactPlayer url={url} playing className="Mag" onPlay={this.kamis} />
        </div>
        <div className="InfoMov">
            {info}     
        </div>
          
    </div>
    )

}

}

const mapStateToProps = (state,ownProps) => {

    const id = ownProps.match.params.i;
    return{
        id: id
    }

}

export default connect(mapStateToProps)(ProjectDetails)