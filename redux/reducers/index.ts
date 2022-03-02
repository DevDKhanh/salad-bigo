import { combineReducers } from 'redux';
import authReducer from './auth';
import interFaceReducer from './interface';
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    interface: interFaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
