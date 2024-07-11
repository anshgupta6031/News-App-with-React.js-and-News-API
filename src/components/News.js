



import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NewsItem from './NewsItem'
import Spinner from './Spinner'

import InfiniteScroll from "react-infinite-scroll-component";				//	from (npm i react-infinite-scroll-component)


export default class News extends Component {

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.string,
		category: PropTypes.string,
	}

	constructor(props) {
		super(props)

		this.state = {                          //  this is how we set state in class based component.....
			articles: [],
			loading: true,
			page: 1,
			totalArticles: 0,
		}

		document.title = `NewsMonkey - ${this.CapitalizeFirstLetter(this.props.category)}`
	}


	CapitalizeFirstLetter = (word) => {
		return word[0].toUpperCase() + word.slice(1)
	}


	async updateNews(currPage) {
		this.setState({ loading: true })

		await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13d0b502d63749469f470f4e57a961f6&page=${currPage}&pageSize=${this.props.pageSize}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ articles: data.articles, totalArticles: data.totalResults, loading: false })
			})
	}


	async componentDidMount() {				//	this is a lifecycle method which runs after the render method.......
		this.updateNews(1)
	}


	// handleNextClick = async () => {
	// 	this.setState({ page: this.state.page + 1 })
	// 	this.updateNews(this.state.page + 1)
	// }


	// handlePrevClick = async () => {
	// 	this.setState({ page: this.state.page - 1 })
	// 	this.updateNews(this.state.page - 1)
	// }


	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 })

		await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13d0b502d63749469f470f4e57a961f6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ articles: this.state.articles.concat(data.articles), totalArticles: data.totalResults })
			})
	}


	render() {
		return (

			<div>
				<h2 style={{ margin: "20px" }}><u>NewsMonkey - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</u></h2>

				{this.state.loading && <Spinner />}

				<InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length < this.state.totalArticles} loader={<Spinner />}>

					<div className="container">
						<div className="row">

							{this.state.articles.map((element) => {
								return <div className="col-md-4" key={element.url} >
									<NewsItem title={(element.title) ? element.title : ""} description={(element.description) ? element.description : ""} imageUrl={(element.urlToImage) ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjp5jjw8oTsE0TUtUJuo0ahese0svE0JV2Q&s"} newsUrl={(element.url) ? element.url : "/"} author={(element.author) ? element.author : "Unknown"} date={new Date(element.publishedAt).toGMTString()} source={(element.source.name) ? element.source.name : "Unknown"} />
								</div>
							})}
						</div>
					</div>
				</InfiniteScroll>


				{/* {(!this.state.loading) && <div className="container my-4 d-flex justify-content-between">
					<button type="button" disabled={(this.state.page <= 1)} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
					<button type="button" disabled={Math.ceil((this.state.totalArticles) / (this.props.pageSize)) <= this.state.page} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
				</div>} */}

			</div>
		)
	}
}


