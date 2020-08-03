import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export class FilmFront3 extends Component {
    render() {
        const height = window.innerHeight;
        return (
            <div>
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=ImCoXO4BA2g" 
                controls={false}
                height={height}
                className="OscMov"
                width='100%'
                muted
                volume="1"
                loop= "1"
                />
            </div>
        )
    }
}

export default FilmFront3

