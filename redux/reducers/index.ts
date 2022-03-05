import { combineReducers } from 'redux';
import authReducer from './auth';
import interFaceReducer from './interface';
import userReducer from './user';
import wheelReducer from './wheel';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    interface: interFaceReducer,
    wheel: wheelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
