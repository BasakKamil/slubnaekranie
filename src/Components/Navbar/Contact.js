import React, { Component } from 'react';
import Mapa from '../Design/Map';
import Foremka from '../Navbar/Formularz';


export class Contact extends Component {
    render() {
        return (
            <div className="ContactSlub">
                <div className="InsideCont row">
                    <div className="DescriptO">
                    <h3 className="nameh3">
                        Oskar Klukowski <br/>
                        Tel.667 168 072<br/>
                        E-Mail: biuro@slubnaekranie.pl
                    </h3>
                    </div>
                <div className="Foremkaa col">
                 
                    <div>
                        <Foremka/>
                    </div>
                    
                </div>
                <div className="Mapka col">
                              <Mapa/>
                    </div>
               
                   
                </div>
            </div>
        )
    }
}

export default Contact
