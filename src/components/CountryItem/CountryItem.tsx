import styles from './CountryItem.module.sass'
import {Box, Heading, Image, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import {CountryInfo} from 'types/country'
import {Link} from 'react-router-dom'

interface CountryItemProps extends CountryInfo {
}

export const CountryItem = ({flag, name, info}: CountryItemProps) => {

	return (
		<Box className={styles.countryItem} _hover={{
			boxShadow: '2xl'
		}} boxShadow="lg" rounded="md" cursor="pointer"
			 overflow="hidden" transition={'ease-in-out'} transitionProperty={'all'} transitionDuration={'.22s'}>
			<Link to={`/details/${name}`}>
				<Image src={flag} alt={name} h="200px" w="full" objectFit="cover"/>

				<Box px={6} py={5}>
					<Heading as="h3" size="md" mb="2">
						{name}
					</Heading>
					<UnorderedList className={styles.list} listStyleType={'none'} ml="0">
						{
							info.map((el, idx) => {
								return (
									<ListItem key={idx} display="flex" gap="5px">
										<Box as={'strong'}>
											{el.title}:
										</Box> <br/>
										<Text>{el.description}</Text>
									</ListItem>
								)
							})
						}
					</UnorderedList>
				</Box>
			</Link>

		</Box>
	)
}

