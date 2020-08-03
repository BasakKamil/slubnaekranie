import React from 'react'
const Dashboard = (props) => {
   const {vimeos} = props;
//    console.log(vimeos)

   const picture = vimeos.uri;
   console.log(picture);
        return (
            <div>
                <h2>Film</h2>
            </div>
        )
    
}

export default Dashboard
