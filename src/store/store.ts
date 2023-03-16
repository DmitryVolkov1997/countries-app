import {combineReducers, configureStore} from '@reduxjs/toolkit'
import controlsReducer from './features/controls/controls-slice'
import countriesReducer from './features/countries/countries-slice'
import detailsReducer from './features/details/details-slice'

const rootReducer = combineReducers({
	controls: controlsReducer,
	countries: countriesReducer,
	details: detailsReducer
})
export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch