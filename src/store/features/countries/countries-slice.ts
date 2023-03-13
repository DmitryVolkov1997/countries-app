import {createSlice} from '@reduxjs/toolkit'
import {fetchCountries} from './countries-actions'
import {Country} from 'types/country'
import {Status} from 'types/status'

type CountriesSlice = {
	status: Status
	error: string | null,
	countries: Country[]
}

const initialState: CountriesSlice = {
	countries: [],
	status: 'idle',
	error: null
}

const countriesSlice = createSlice({
	name: '@@countries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCountries.pending, (state) => {
			state.status = 'loading'
			state.error = null
		}).addCase(fetchCountries.fulfilled, (state, action) => {
			state.status = 'received'
			state.countries = action.payload
		}).addCase(fetchCountries.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload || 'Cannot load data'
		})
	}
})

export const {} = countriesSlice.actions
export default countriesSlice.reducer