import {createSlice} from '@reduxjs/toolkit'
import {Country} from 'types/country'
import {Status} from 'types/status'
import {fetchDetails, fetchNeighbors} from './details-actions'

type DetailsSlice = {
	details: Country | null
	status: Status
	error: null | string
	neighbors: Country[]
}

const initialState: DetailsSlice = {
	details: null,
	status: 'idle',
	error: null,
	neighbors: []
}

const detailsSlice = createSlice({
	name: '@@details',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDetails.pending, (state) => {
			state.status = 'loading'
			state.error = null
		}).addCase(fetchDetails.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload || 'Cannot load data'
		}).addCase(fetchDetails.fulfilled, (state, action) => {
			state.status = 'received'
			state.details = action.payload
		}).addCase(fetchNeighbors.pending, (state) => {
			state.status = 'loading'
			state.error = null
		}).addCase(fetchNeighbors.rejected, (state, action) => {
			state.status = 'rejected'
			state.error = action.payload || 'Cannot load data'
		}).addCase(fetchNeighbors.fulfilled, (state, action) => {
			state.status = 'received'
			state.neighbors = action.payload
		})
	}
})

export default detailsSlice.reducer