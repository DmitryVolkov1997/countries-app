import styles from './HomePage.module.sass'
import {Layout} from 'layout/Layout'
import {Controls, Countries} from 'store/features'

export const HomePage = () => {
	return (
		<Layout>
			<Controls/>
			<Countries/>
		</Layout>
	)
}
