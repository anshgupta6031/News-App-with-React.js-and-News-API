import './App.css';
import React, { Component } from 'react'                    //  type rcc for class component......

import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';			//	from (npm i react-router-dom)

import LoadingBar from 'react-top-loading-bar'					//	from (npm i react-top-loading-bar)


export default class App extends Component {
	pageSize = "8"
	country = "in"
	apiKey = process.env.REACT_APP_NEWS_API					//	fetches the api key from (.env.local) file.....


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
						<Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" key="general" />} />
						<Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="business" key="business" />} />
						<Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="entertainment" key="entertainment" />} />
						<Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="general" key="general" />} />
						<Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="health" key="health" />} />
						<Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="science" key="science" />} />
						<Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="sports" key="sports" />} />
						<Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="technology" key="technology" />} />
					</Routes>

				</div>
			</Router>
		)
	}
}

