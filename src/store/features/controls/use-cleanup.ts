import {useAppDispatch} from '../../redux-hooks'
import {clearControls} from './controls-slice'

export const useCleanup = () => {
	const dispatch = useAppDispatch()

	return () => dispatch(clearControls())
}
