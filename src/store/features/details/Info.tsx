import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Heading, IconButton, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { Link, NavigateFunction } from 'react-router-dom'
import { Country } from 'types/country'
import { formatNumber } from '../../../utils/format-number'
import styles from './Info.module.sass'
import { useNeighbors } from './use-neighbors'

export interface InfoProps extends Country {
	navigate: NavigateFunction
}

export const Info = ({
	name,
	capital,
	region,
	population,
	nativeName,
	flags,
	borders,
	languages,
	topLevelDomain,
	subregion,
	currencies,
	navigate
}: InfoProps) => {
	const neighbors = useNeighbors(borders)

	return (
		<Box className={styles.info}>
			<ButtonGroup size="md" isAttached variant="outline" onClick={() => navigate(-1)}>
				<IconButton aria-label="Back" icon={<ArrowBackIcon />} />
				<Button>Back</Button>
			</ButtonGroup>
			<Box className={styles.row}>

				<Image boxShadow="dark-lg" rounded="md" className={styles.img} src={flags.svg} alt={name} w="full" h="full" objectFit="fill" />

				<Box className={styles.body}>
					<Heading className={styles.title} as="h2">{name}</Heading>

					<Box className={styles.listGroup}>
						<UnorderedList className={styles.list} listStyleType="none" ml="0">
							<ListItem>
								<Box as="strong">
									Native Name:
								</Box>
								<Box as="span">
									{nativeName}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Population:
								</Box>
								<Box as="span">
									{formatNumber(population)}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Region:
								</Box>
								<Box as="span">
									{region}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Sub Region:
								</Box>
								<Box as="span">
									{subregion}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Capital:
								</Box>
								<Box as="span">
									{capital}
								</Box>
							</ListItem>
						</UnorderedList>
						<UnorderedList className={styles.list} listStyleType="none" ml="0">
							<ListItem>
								<Box as="strong">
									Top Level Domain:
								</Box>
								<Box as="span">
									{topLevelDomain}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Currency:
								</Box>
								<Box as="span">
									{currencies[0].name}
								</Box>
							</ListItem>
							<ListItem>
								<Box as="strong">
									Languages:
								</Box>
								<Box as="span">
									{languages.map((language, idx) => {
										return `${language.name} `
									})}
								</Box>
							</ListItem>
						</UnorderedList>
					</Box>
					{
						neighbors.length ? (
							<Box className={styles.wrapper}>
								<Box as="strong">
									Border Countries:
								</Box>
								<Box className={styles.borders}>
									{
										neighbors.map(b => (
											<Box
												key={b.name} boxShadow="base" rounded="md">
												<Link className={styles.borderLink} to={`/details/${b.name}`}>
													{b.name}
												</Link>
											</Box>
										))
									}
								</Box>
							</Box>
						) : null
					}
				</Box>
			</Box>
		</Box>
	)
}

