import { Box, Heading } from '@chakra-ui/react'
import { Spinner } from 'components'
import { useEffect } from 'react'
import { NavigateFunction } from 'react-router-dom'
import styles from './CountryDetails.module.sass'
import { Info } from './Info'
import { useDetails } from './use-details'

interface CountryDetailsProps {
	name?: string
	navigate: NavigateFunction
}

export const CountryDetails = ({ name = '', navigate }: CountryDetailsProps) => {
	const [details, { status, error }] = useDetails(name)

	useEffect(() => {

	}, [error])

	return (
		<Box className={styles.details}>
			{status === 'loading' && (
				<Box className={styles.spinner}><Spinner /></Box>
			)}

			{error === 'Подробное описание не загрузилось' && (
				<Heading mt={"5%"} textAlign="center">{error}</Heading>
			)}
			{details && <Info {...details} navigate={navigate} />}
		</Box>
	)
}

