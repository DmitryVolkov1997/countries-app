import {combineReducers, configureStore} from '@reduxjs/toolkit'
import controlReducer from './features/controls/controls-slice'
import countriesReducer from './features/countries/countries-slice'

const rootReducer = combineReducers({
	control: controlReducer,
	counties: countriesReducer
})
export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch