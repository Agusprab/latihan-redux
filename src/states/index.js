/**
 * @TODO: Create Redux store
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import usersReducer from './users/reducer';
import talkDetailReducer from './talkDetail/reducer';
import talksReducer from './talks/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    talkDetail: talkDetailReducer,
    talks: talksReducer,
  },
});

export default store;
