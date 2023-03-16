import {DetailsPage, HomePage, NotFound} from 'pages'
import {Routes, Route} from 'react-router-dom'

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/details/:name" element={<DetailsPage/>}/>
				<Route path='*' element={<NotFound/>}/>
			</Routes>
		</div>
	)
}

export default App
