import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.sass'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from './theme'
import {Provider} from 'react-redux'
import {store} from 'store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store}>
			<ChakraProvider>
				<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
				<App/>
			</ChakraProvider>
		</Provider>
	</BrowserRouter>
)
