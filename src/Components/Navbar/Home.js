import React, { Component } from 'react';
import Film from '../Film/FilmFront2';
import BackgroundNew from '../Film/BackgroundNew';  



export class Home extends Component {


   
    render() {
     
        return (
            <div className="HomePage">
              <div className="FilmGlowny">
                <Film/>
              </div>
              <BackgroundNew/>
            </div>
        )
    }
}


export default Home
