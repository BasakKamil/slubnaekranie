import React, { Component } from 'react';
import Mapa from '../Design/Map';
import Foremka from '../Navbar/Formularz';


export class Contact extends Component {
    render() {
        return (
            <div className="ContactSlub">
                <div className="InsideCont row">
                <div className="Foremkaa col-md-6">
                    <h3 className="nameh3">
                    Oskar Klukowski <br/>
                    Tel.
                    </h3>
                    <div>
                        <Foremka/>
                    </div>
                    
                </div>
                <div className="Mapka col-md-6">
                              <Mapa/>
                    </div>
               
                   
                </div>
            </div>
        )
    }
}

export default Contact
