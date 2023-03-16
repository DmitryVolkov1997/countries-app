import styles from './HomePage.module.sass'
import {Layout} from 'layout/Layout'
import {Controls, Countries} from 'store/features'
import {useCleanup} from '../../store/features/controls/use-cleanup'
import {useEffect} from 'react'

export const HomePage = () => {
	const cleanUp = useCleanup()

	useEffect(() => {
		cleanUp()
	}, [])

	return (
		<Layout>
			<Controls/>
			<Countries/>
		</Layout>
	)
}
