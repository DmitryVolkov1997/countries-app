import {useAppDispatch, useAppSelector} from '../../redux-hooks'
import {useEffect} from 'react'
import {fetchCountries} from './countries-actions'
import {useSelector} from 'react-redux'
import {selectCountriesInfo, selectVisibleCountries} from './countries-selectors'
import {Country} from 'types/country'
import {selectControls} from '../controls/controls-selectors'

export const useCountries = (): [Country[], ReturnType<typeof selectCountriesInfo>] => {
	const dispatch = useAppDispatch()
	const controls = useSelector(selectControls)
	const countries = useAppSelector
	(state => selectVisibleCountries(state, controls))
	const {status, error, qty} = useSelector(selectCountriesInfo)

	useEffect(() => {
		if (!qty) {
			dispatch(fetchCountries())
		}
	}, [qty, dispatch])

	return [countries, {status, error, qty}]
}