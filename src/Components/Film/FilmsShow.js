import React, { Component } from 'react';
import anime from 'animejs';


export class FilmsShow extends Component {

    
    componentDidMount(){
        anime({
            targets: '.fly',
            scale: [
              {value: .5, easing: 'easeOutSine', duration: 800},
              {value: 1, easing: 'easeInOutQuad', duration: 2500}
            ],
            delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
            loop: true
          });
    }
    render() {
        const {item} = this.props;
        return (
            <div className="fly">
                   <h1>Film: {item}</h1>
            </div>
        )
    }
}

export default FilmsShow
