import {useAppDispatch, useAppSelector} from '../../redux-hooks'
import {fetchNeighbors} from './details-actions'
import {selectNeighbors} from './details-selectors'
import {Country} from 'types/country'
import {useEffect} from 'react'

export const useNeighbors = (borders: string[]): Country[] => {
	const dispatch = useAppDispatch()
	const neighbors = useAppSelector(selectNeighbors)

	useEffect(() => {
		dispatch(fetchNeighbors(borders))
	}, [borders, dispatch])


	return neighbors
}