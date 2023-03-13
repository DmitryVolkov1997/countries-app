import {useAppDispatch} from '../../redux-hooks'
import {useEffect} from 'react'
import {fetchCountries} from './countries-actions'
import {useSelector} from 'react-redux'
import {selectAllCountries, selectCountriesInfo} from './countries-selectors'
import {Country} from 'types/country'

export const useCountries = (): [Country[], ReturnType<typeof selectCountriesInfo>] => {
	const dispatch = useAppDispatch()
	const {countries} = useSelector(selectAllCountries)
	const {status, error} = useSelector(selectCountriesInfo)

	useEffect(() => {
		dispatch(fetchCountries())
	}, [])

	return [countries, {status, error}]
}