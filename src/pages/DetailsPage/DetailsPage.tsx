import styles from './DetailsPage.module.sass'
import {useNavigate, useParams} from 'react-router-dom'
import {CountryDetails} from 'store/features'
import {Layout} from '../../layout/Layout'


export const DetailsPage = () => {
	const {name} = useParams()
	const navigate = useNavigate()

	return (
		<Layout>
			<CountryDetails name={name} navigate={navigate}/>
		</Layout>
	)
}
