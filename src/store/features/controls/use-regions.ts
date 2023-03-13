import {useAppDispatch} from '../../redux-hooks'
import {useSelector} from 'react-redux'
import {selectRegion} from './controls-selectors'
import {setRegion} from './controls-slice'
import {ChangeEvent} from 'react'

type onSelect = ChangeEvent<HTMLSelectElement>
export const useRegion = (): [string, (e: onSelect) => void] => {
	const dispatch = useAppDispatch()
	const {region} = useSelector(selectRegion)

	const handleRegion = (e: onSelect) => {
		dispatch(setRegion(e.target.value))
	}

	return [region, handleRegion]
}