import React from 'react'
import styles from './Countries.module.sass'
import {CountryItem, Spinner} from 'components'
import {useCountries} from './use-countries'
import {Box, Heading} from '@chakra-ui/react'
import {CountryInfo} from 'types/country'


export const Countries = () => {
	const [countries, {status, error}] = useCountries()

	return (
		<>
			{status === 'loading' && (
				<Box className={styles.spinner}><Spinner/></Box>
			)}

			{error && (
				<Heading textAlign="center">{error}</Heading>
			)}

			<Box className={styles.countries}>
				{status === 'received' && countries.map((c) => {
					const countryInfo: CountryInfo = {
						flag: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toString()
							},
							{
								title: 'Region',
								description: c.region
							},
							{
								title: 'Capital',
								description: c.capital
							}
						]
					}

					return <CountryItem key={c.name} {...countryInfo}/>
				})}
			</Box>
		</>
	)
}

