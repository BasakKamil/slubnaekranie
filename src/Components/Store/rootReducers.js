import { combineReducers } from 'redux';
import adminPanelReducer from './AdminPanelReducer';
import vimeoReducer from './vimeoReducer';

const rootReducers = combineReducers({
    auth: adminPanelReducer,
    vimeo: vimeoReducer
});

export default rootReducers