import { useColorMode } from '@chakra-ui/react'
import { Header } from 'layout'
import { ReactNode } from 'react'
import styles from './Layout.module.sass'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div className={styles.layout}>
			<Header className={styles.header} colorMode={colorMode} toggleColorMode={toggleColorMode} />

			<main className={styles.main}>
				{children}
			</main>
		</div>
	)
}

