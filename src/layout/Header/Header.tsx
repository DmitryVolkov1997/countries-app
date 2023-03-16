import styles from './Header.module.sass'
import {Box, Button, Text} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {DetailedHTMLProps, HTMLAttributes} from 'react'
import cn from 'classnames'
import {useCleanup} from '../../store/features/controls/use-cleanup'
import {Link} from 'react-router-dom'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggleColorMode: () => void
	colorMode: string
}

export const Header = ({toggleColorMode, colorMode, className, ...props}: HeaderProps) => {
	const cleanUp = useCleanup()

	return (
		<Box as="header" className={cn(styles.header, className)} boxShadow="base" {...props}>
			<Box className={styles.headerRow}>
				<Link to={'/'} className={styles.headerText} onClick={cleanUp}>
					Where is the world?
				</Link>

				<Button className={styles.headerButton} background={"transparent"}
						leftIcon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
						onClick={toggleColorMode}>
					{colorMode === 'light' ? 'Dark' : 'Light'} Mode
				</Button>
			</Box>
		</Box>
	)
}
