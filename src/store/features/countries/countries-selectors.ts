import {RootState} from '../../store'

export const selectAllCountries = (state: RootState) => state.counties

export const selectCountriesInfo = (state: RootState) => ({
	status: state.counties.status,
	error: state.counties.error
})