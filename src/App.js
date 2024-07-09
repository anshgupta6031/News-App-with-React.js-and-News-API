import './App.css';
import React, { Component } from 'react'                    //  type rcc for class component......

import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
	render() {
		return (
			<Router>
				<div>

					<Navbar />

					<Routes>
						<Route exact path="/" element={<News pageSize="15" country="in" category="general" key="general" />} />
						<Route exact path="/business" element={<News pageSize="15" country="in" category="business" key="business" />} />
						<Route exact path="/entertainment" element={<News pageSize="15" country="in" category="entertainment" key="entertainment" />} />
						<Route exact path="/general" element={<News pageSize="15" country="in" category="general" key="general" />} />
						<Route exact path="/health" element={<News pageSize="15" country="in" category="health" key="health" />} />
						<Route exact path="/science" element={<News pageSize="15" country="in" category="science" key="science" />} />
						<Route exact path="/sports" element={<News pageSize="15" country="in" category="sports" key="sports" />} />
						<Route exact path="/technology" element={<News pageSize="15" country="in" category="technology" key="technology" />} />
					</Routes>

				</div>
			</Router>
		)
	}
}

