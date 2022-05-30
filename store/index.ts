/* eslint-disable import/no-unresolved */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ROOT_DATA_KEY } from '@lib/utils/helpers';
import loginModalReducer from '@store/login-modal';

const rootPersistConfig = {
    key: ROOT_DATA_KEY,
    storage,
};

const combinedReducers = combineReducers({
    loginModal: loginModalReducer,
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
