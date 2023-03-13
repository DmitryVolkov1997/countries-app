import {useAppDispatch} from '../../redux-hooks'
import {setSearch} from './controls-slice'
import {useSelector} from 'react-redux'
import {selectSearch} from './controls-selectors'
import {ChangeEvent} from 'react'

type onSearch = ChangeEvent<HTMLInputElement>
export const useSearch = (): [string, (e: onSearch) => void] => {
	const dispatch = useAppDispatch()
	const {search} = useSelector(selectSearch)

	const handleSearch = (e: onSearch) => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
}