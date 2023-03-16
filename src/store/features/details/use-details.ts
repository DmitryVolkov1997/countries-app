import {useAppDispatch} from '../../redux-hooks'
import {useEffect} from 'react'
import {fetchDetails} from './details-actions'
import {useSelector} from 'react-redux'
import {selectDetails, selectDetailsInfo} from './details-selectors'
import {Country} from 'types/country'

export const useDetails = (name: string): [Country | null, ReturnType<typeof selectDetailsInfo>] => {
	const dispatch = useAppDispatch()
	const {details} = useSelector(selectDetails)
	const {status, error} = useSelector(selectDetailsInfo)

	useEffect(() => {
		dispatch(fetchDetails(name))
	}, [name, dispatch])

	return [details, {error, status}]
}