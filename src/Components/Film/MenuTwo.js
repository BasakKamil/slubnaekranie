import React, { Component } from 'react';
import MenuOpen from '../Film/MenuOpen';


export class MenuTwo extends Component {
   constructor(props){
        super(props);
        this.kamil = this.kamil.bind(this);

        this.state = {
            open: true
        }
   }

   kamil(){
       this.setState(state => ({
        open: !state.open
      }));

   }

    render() {
        const opened = this.state.open;
        return (
         <div className="MeniTwo" onClick={this.kamil}>
              <svg className="svgmin"><path d="M19,17H5c-1.103,0-2,0.897-2,2s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,17,19,17z"/><path d="M19,10H5c-1.103,0-2,0.897-2,2s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,10,19,10z"/><path d="M19,3H5C3.897,3,3,3.897,3,5s0.897,2,2,2h14c1.103,0,2-0.897,2-2S20.103,3,19,3z"/></svg>
              <MenuOpen opened={opened}/>
         </div>
        )
    }
}

export default MenuTwo
