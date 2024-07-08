



import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

	constructor() {
		super()

		this.state = {                          //  this is how we set state in class based component.....
			articles: [],
			loading: false,
		}
	}


	async componentDidMount() {				//	this is a live cycle method which runs after the render method.......
        await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=13d0b502d63749469f470f4e57a961f6")
		.then((response) => response.json())
        .then((data) => {
            this.setState({ articles: data.articles })
        })
    }


	render() {
		return (

			<div className='container my-4'>
				<h3><u>NewsMonkey - Top Headlines</u></h3>

				<div className="row">

					{this.state.articles.map((element) => {
						return <div className="col-md-3" key={element.url} >
							<NewsItem title={(element.title)? element.title : ""} description={(element.description)? element.description : ""} imageUrl={(element.urlToImage)? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjp5jjw8oTsE0TUtUJuo0ahese0svE0JV2Q&s"} newsUrl={(element.url)? element.url : "/"} />
						</div>
					})}

				</div>

			</div>
		)
	}
}


