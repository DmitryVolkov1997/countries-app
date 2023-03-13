import {Header} from 'layout'
import React, {ReactNode} from 'react'
import styles from './Layout.module.sass'
import {useColorMode} from '@chakra-ui/react'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<div className={styles.layout}>
			<Header className={styles.header} colorMode={colorMode} toggleColorMode={toggleColorMode} />

			<main className={styles.main}>
				{children}
			</main>

			<footer className={styles.footer}>
				Footer
			</footer>
		</div>
	)
}

