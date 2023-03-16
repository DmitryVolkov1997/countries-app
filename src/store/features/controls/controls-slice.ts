import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Region} from 'types/region'

type ControlsSlice = {
	regions: Region[]
	search: string
	region: string
}

const initialState: ControlsSlice = {
	regions: [],
	search: '',
	region: ''
}

const controlsSlice = createSlice({
	name: '@@controls',
	initialState,
	reducers: {
		setRegions(state, action: PayloadAction<Region[]>) {
			state.regions = action.payload
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setRegion(state, action: PayloadAction<string>) {
			state.region = action.payload
		},
		clearControls(state) {
			state.search = ''
			state.region = ''
		}
	}
})

export const {setRegions, setSearch, setRegion, clearControls} = controlsSlice.actions
export default controlsSlice.reducer
