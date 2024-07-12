import './App.css';
import React, { Component } from 'react'                    //  type rcc for class component......

import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';			//	from (npm i react-router-dom)

import LoadingBar from 'react-top-loading-bar'					//	from (npm i react-top-loading-bar)


export default class App extends Component {
	pageSize = "8"
	country="in"


	state = {
		progress: 0,
	}

	setProgress = (progress)=>{
		this.setState({progress: progress})
	}


	render() {
		return (
			<Router>
				<div>

					<Navbar />

					<LoadingBar color='#f11946' progress={this.state.progress} loaderSpeed={900} shadow={true} />

					<Routes>
						<Route exact path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" key="general" />} />
						<Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="business" key="business" />} />
						<Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="entertainment" key="entertainment" />} />
						<Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" key="general" />} />
						<Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="health" key="health" />} />
						<Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="science" key="science" />} />
						<Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="sports" key="sports" />} />
						<Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="technology" key="technology" />} />
					</Routes>

				</div>
			</Router>
		)
	}
}

