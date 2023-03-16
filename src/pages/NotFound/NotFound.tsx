import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {Layout} from '../../layout/Layout'

export const NotFound = () => {
	return (
		<Layout>
			<Box mt='40' display='grid' justifyContent='center' alignItems={'center'}>
				<Heading as={'h1'}>Not Found</Heading>
			</Box>
		</Layout>
	)
}

