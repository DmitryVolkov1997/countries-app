import {RootState} from '../../store'

export const selectDetails = (state: RootState) => state.details

export const selectDetailsInfo = (state: RootState) => ({
	error: state.details.error,
	status: state.details.status
})

export const selectNeighbors = (state: RootState) => state.details.neighbors