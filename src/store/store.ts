import {combineReducers, configureStore} from '@reduxjs/toolkit'
import controlReducer from './features/controls/controls-slice'
import countriesReducer from './features/countries/countries-slice'

const rootReducer = combineReducers({
	controls: controlReducer,
	countries: countriesReducer
})
export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch