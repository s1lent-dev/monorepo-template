import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: [],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(),
    devTools: true,
});

setupListeners(store.dispatch);

export { store };
export type RootState = ReturnType<typeof store.getState>;