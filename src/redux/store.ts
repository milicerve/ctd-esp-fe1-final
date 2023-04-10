import { configureStore} from "@reduxjs/toolkit";
import personajesSlice from './personajesSlice'

const store = configureStore({
    reducer: {
      personaje: personajesSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;