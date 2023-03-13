import styles from './Search.module.sass'
import {Input, InputGroup, InputLeftElement, useMediaQuery} from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
import {useSearch} from '../../store/features/controls/use-search'

interface SearchProps {
}

export const Search = ({}: SearchProps) => {
	const [search, setSearch] = useSearch()
	const [media767px] = useMediaQuery('(max-width: 767px)')

	return (
		<InputGroup className={styles.row} w={media767px ? '100%' : '280px'}>
			<InputLeftElement
				top={'5.5px'}
				pointerEvents="none"
				children={<Search2Icon color="gray.300"/>}
			/>
			<Input className={styles.search} h={'50px'} type="search" placeholder="Search for a country" value={search}
				   onChange={setSearch}/>
		</InputGroup>
	)
}
