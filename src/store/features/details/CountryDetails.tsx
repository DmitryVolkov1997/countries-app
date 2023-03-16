import React from 'react'
import {NavigateFunction} from 'react-router-dom'
import {Box, Heading} from '@chakra-ui/react'
import {Info} from './Info'
import {useDetails} from './use-details'
import styles from './CountryDetails.module.sass'
import {Spinner} from 'components'

interface CountryDetailsProps {
	name?: string
	navigate: NavigateFunction
}

export const CountryDetails = ({name = '', navigate}: CountryDetailsProps) => {
	const [details, {status, error}] = useDetails(name)


	return (
		<Box className={styles.details}>
			{status === 'loading' && (
				<Box className={styles.spinner}><Spinner/></Box>
			)}

			{error && (
				<Heading textAlign="center">{error}</Heading>
			)}
			{details && <Info {...details} navigate={navigate}/>}
		</Box>
	)
}

