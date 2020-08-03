import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Formularz extends Component {
    constructor(props){
        super(props);
        this.state = {name: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
    }
    render() {
        
        return (
            <div className="FormaAll">
                <form className="ForemkaKontakty" action="mailto:biuro@slubnaekranie.pl" method="post" enctype="text/plain">
                    <label>
                        Imię: <br/>
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Nazwisko: <br/>
                        <input type="text" name="surname" onChange={this.handleChange}  />
                    </label>
                    <label>
                       Telefon Kontaktowy: <br/>
                        <input type="text" name="number" onChange={this.handleChange} />
                    </label>
                    <label>
                       Treść Pytania: <br/>
                        <textarea type="text" name="text" onChange={this.handleChange} />
                    </label>
                   
                         <input className="btn btn-success" type="submit" value="Wyślij"></input> 

                </form>
                <div className="partTwo">
                    <h4>Wiadomość</h4>
                     <p>Twoje imie i nazwisko: {this.state.name} {this.state.surname}</p>  
                     <p>Telefon Kontaktowy: {this.state.number}</p>    
                     <p>Wiadomość: {this.state.text}</p>      
                </div>
            </div>
        )
    }
}

export default Formularz
