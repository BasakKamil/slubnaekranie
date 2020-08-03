import React, { Component } from 'react';
import Foto from './slub.jpg';
import { Link } from 'react-router-dom';

export class  Oskarlogo extends Component {
    render() {
        return (
            <div className="Logosy">
               <Link to="/"><img className="LogoOsk" src={Foto} alt=""/></Link>
            </div>
        )
    }
}

export default Oskarlogo
