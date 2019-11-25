import { combineReducers } from 'redux';
import currentUser from './usersReducer';
import itemsReducer from './itemsReducer';


export default combineReducers({
    currentUser,
    itemsReducer
});