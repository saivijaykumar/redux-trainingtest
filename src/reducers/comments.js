
import {combineReducers} from 'redux';
import { commentsreducer } from '.';

const allReducers=combineReducers({
    comments:commentsreducer
})
export default allReducers;