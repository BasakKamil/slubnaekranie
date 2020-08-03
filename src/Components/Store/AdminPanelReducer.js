const initialsState = {
    movies : {}
}


const adminPanelReducer = (state = initialsState,action) => {
    switch(action.type){
        default: 
        console.log("Unknow Action" + action.type);
        return state;
    }
}
export default adminPanelReducer