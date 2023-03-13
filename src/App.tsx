import { HomePage } from 'pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	)
}

export default App
