import {createStore} from 'redux';
// import adminPanelReducer from './AdminPanelReducer';
import rootReducer from './rootReducers';

const store = createStore(rootReducer);


export default store;