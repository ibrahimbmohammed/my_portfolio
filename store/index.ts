/* eslint-disable import/no-unresolved */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ROOT_DATA_KEY } from '@constants';
import loginModalReducer from '@store/login-modal';
import postModalReducer from '@store/post-modal';
import themeReducer from '@store/theme-slice';
import orgIdReducer from '@store/org-id';
import userEmailReducer from '@store/user-email';

const rootPersistConfig = {
    key: ROOT_DATA_KEY,
    storage,
};

const combinedReducers = combineReducers({
    loginModal: loginModalReducer,
    postModal: postModalReducer,
    theme: themeReducer,
    orgId: orgIdReducer,
    userEmail: userEmailReducer,
});

const rootReducer: typeof combinedReducers = (state, action) => {
    if (action.type === 'user/setLogoutState') {
        storage.removeItem(`persist:${ROOT_DATA_KEY}`);
        return combinedReducers(undefined, action);
    }
    return combinedReducers(state, action);
};

const persistedReducers = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store, {}, () => {
    persistor.persist();
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
