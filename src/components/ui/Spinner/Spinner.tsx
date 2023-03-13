import styles from './Spinner.module.sass'
import {Spinner as SpinnerUI} from '@chakra-ui/react'

interface SpinnerProps {
}

export const Spinner = ({}: SpinnerProps) => {
	return (
		<SpinnerUI
			thickness="4px"
			speed="0.65s"
			emptyColor="gray.200"
			color="blue.500"
			size="xl"
		/>
	)
}
