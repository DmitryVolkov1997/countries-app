import {RootState} from '../../store'

export const selectAllCountries = (state: RootState) => state.countries

export const selectCountriesInfo = (state: RootState) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.countries.length
})

export const selectVisibleCountries = (state: RootState, {search = '', region = ''}) => {
	return state.countries.countries.filter(c => {
		return c.name.toLowerCase().includes(search.toLowerCase()) && c.region.toLowerCase().includes(region.toLowerCase())
	})
}