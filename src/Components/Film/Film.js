import React, { Component } from 'react';
// import FilmsShow from "../Film/FilmsShow";
import Api from './api';


let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("b65e1104345443d5cebe70d828eb287ef5e02842", "bZwxmx48EbRyDcKqEUyVD9gAM+2cFWvr4BCTJN7VIH4psTDtyW36pPHgEj4XyCU1oS+TS7rxjbUEfZLRg25ZeK1niZ+pfjHYffFPIeX8xvtlHXMHDuZmKnbeGOjkmpiO","ae30b4a44d981c016e2ea1b18a7fdbcf");


export class Film extends Component {
 
constructor(props) {
  super(props);

  this.kamil = this.kamil.bind(this);

  this.state = {
    items: []
  }
}
    kamil = (all) => {
      this.setState({items: all});
    }

  
    componentDidMount(){
     
      client.request({
        method: 'GET',
        path: '/users/slubnaekranie/videos'
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log(error);
        }
      
          // console.log(body.data)
          let abc = body.data;
          return abc
    
      }
      );
    
    }
    
  
    render() {
     
     
    
            
        return(
            
        <div className="ProductShow"> 
            <Api/>
        </div>
        )
    }
    
}




export default Film
