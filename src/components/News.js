



import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

	articles = [
		{
			"source": {
				"id": null,
				"name": "The Boston Globe"
			},
			"author": null,
			"title": "Amtrak cancels train service between Boston, N.Y. - The Boston Globe",
			"description": "The rail service cited electrical problems and said it was working with affected travelers to rebook their trips and would waive additional charges.",
			"url": "https://www.bostonglobe.com/2024/07/06/metro/amtrak-boston-new-york-cancalled-malfunction/",
			"urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/FiPDscbNY5Cn4vKcuwvfDx0jW-Q=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/UZPCJ6YFK76P7DSECRKMCJLQ3M.jpg",
			"publishedAt": "2024-07-07T03:56:15Z",
			"content": "Amtrak train service between Boston and New York was restored late Saturday after a power outage on the tracks led the rail service to cancel trains along the busy northeast corridor for most of the … [+1790 chars]"
		},
		{
			"source": {
				"id": "cnn",
				"name": "CNN"
			},
			"author": "Eyad Kourdi, Kareem El Damanhoury, Lauren Izso",
			"title": "Israeli attack kills at least 16 at UNRWA school for the displaced in Gaza, ministry says - CNN",
			"description": "The Israeli military says militants were operating in the area. A displaced man at the school says children are among the injured.",
			"url": "https://www.cnn.com/2024/07/06/middleeast/israeli-attack-unwra-school-gaza-intl-latam/index.html",
			"urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2160282494.jpg?c=16x9&q=w_800,c_fill",
			"publishedAt": "2024-07-07T03:49:00Z",
			"content": "An Israeli attack has killed at least 16 Palestinians and injured 50 others at UNRWAs Al-Jaouni school sheltering displaced people in al-Nuseirat camp in central Gaza, the Palestinian Ministry of Hea… [+3250 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "BBC News"
			},
			"author": null,
			"title": "Election fallout: deep shifts in Muslim and Jewish voting - BBC.com",
			"description": "In the 2024 UK general election, Labour suffered some surprise seat losses over its stance on Gaza.",
			"url": "https://www.bbc.com/news/articles/c3g37mk7vxlo",
			"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f8cd/live/e96e0c70-3ba9-11ef-bbe0-29f79e992ddd.png",
			"publishedAt": "2024-07-07T02:48:37Z",
			"content": "By Aleem Maqbool, Religion editor\r\nHowever big the headline change in the vote between the past two elections, drill down into two demographic pockets of Britain and you find staggering shifts.\r\nIt a… [+13354 chars]"
		},
		{
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Scientists re-emerge after a year in Mars simulation project - DW (English)",
            "description": "The two women and two men spent the last 378 days in Houston's Mars Dune Alpha habitat, designed to mimic Red Planet conditions. They spent the year conducting \"Marswalks\" and operating under \"additional stressors.\"",
            "url": "https://www.dw.com/en/scientists-re-emerge-after-a-year-in-mars-simulation-project/a-69585838",
            "urlToImage": "https://static.dw.com/image/69585856_6.jpg",
            "publishedAt": "2024-07-07T02:10:57Z",
            "content": "After a year, four scientists in the United States on Saturday ended an experiment that simulated life on Mars.\r\nTo loud applause, the four volunteers left NASA-built Mars Dune Alpha, where they had … [+2096 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Mike Barnes",
            "title": "Producer Jon Landau, James Cameron’s Right-Hand Man on ‘Titanic’ and the ‘Avatar’ Films, Dies at 63 - Hollywood Reporter",
            "description": "In addition to producing three of the highest-grossing movies in history, the problem-solving Oscar winner guided ‘Honey, I Shrunk the Kids’ and ‘Dick Tracy’ and was an executive at Fox.",
            "url": "http://www.hollywoodreporter.com/movies/movie-news/jon-landau-dead-titanic-avatar-1235940341/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/Jon-Landau-Obit-Template-Headshot-Getty-H-2024.jpg?w=1296&h=730&crop=1",
            "publishedAt": "2024-07-07T01:32:27Z",
            "content": "Jon Landau, the Oscar-winning producer who made the dreams of James Cameron come to life by overcoming extreme logistical challenges to bring the filmmaker’s Titanic and Avatar blockbusters to the bi… [+10038 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "Caitlin Clark rallies Fever past Liberty 83-78 with first triple-double by WNBA rookie - The Associated Press",
            "description": "Caitlin Clark posted the first triple-double by a rookie in WNBA history to rally Indiana to an 83-78 victory over New York on Saturday at Gainbridge Fieldhouse, snapping the Fever’s nine-game losing streak to the Liberty. Clark finished with 19 points, 13 as…",
            "url": "https://apnews.com/article/new-york-liberty-indiana-fever-wnba-9ab8ed4e87d43e8e214b20a164c5e8ff",
            "urlToImage": "https://dims.apnews.com/dims4/default/6a2b6ea/2147483647/strip/true/crop/4228x2378+0+220/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2F39%2F3f7609c0b6013df0f1960ddc0029%2Fb198b854c45d41b2aac28c2d33ff0930",
            "publishedAt": "2024-07-07T00:50:00Z",
            "content": "INDIANAPOLIS (AP) Caitlin Clark posted the first triple-double by a rookie in WNBA history to help rally Indiana to an 83-78 victory over New York on Saturday at Gainbridge Fieldhouse, snapping the F… [+4134 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": null,
            "title": "Riverdale's Vanessa Morgan Is Pregnant, Expecting Baby No. 2 - E! NEWS",
            "description": "Riverdale alum Vanessa Morgan announced July 6 she is pregnant with her second child.",
            "url": "https://www.eonline.com/news/1404655/riverdales-vanessa-morgan-is-pregnant-expecting-baby-no-2",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202466/rs_1200x1200-240706165223-1200-vanessa-morgan-critics-choice-awards-cjh-011424.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2024-07-07T00:24:16Z",
            "content": "Riverdale alum Vanessa Morgan is expanding her family.\r\nThe 32-year-old is pregnant and due to soon give birth to her second baby, her first with boyfriend James Karnik. On July 6, the actress shared… [+838 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Hamas appears to clear way for possible cease-fire deal with Israel after reportedly dropping key demand - CBS News",
            "description": "The militant group – which controlled Gaza before triggering the war with an Oct. 7 attack on Israel – has reportedly given initial approval of the cease-fire deal.",
            "url": "https://www.cbsnews.com/news/hamas-appears-clear-way-possible-ceasefire-deal-israel-reportedly-dropping-key-demand-egypt/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/06/9b17e522-ad5c-4a8a-a308-960215c26ade/thumbnail/1200x630/60a646d8a14628d3ca8ffcbb08e28f54/ap24187535037597.jpg?v=57e8061b2038d609da26e467de5ddfb8",
            "publishedAt": "2024-07-07T00:13:54Z",
            "content": "There is new hope for a cease-fire deal in the Middle East after Hamas responded to a U.S.-backed proposal for a phased deal in Gaza.\r\nThe militant group – which controlled Gaza before triggering the… [+6868 chars]"
        },
	]

	constructor() {
		super()

		this.state = {                          //  this is how we set state in class based component.....
			articles: this.articles,
			loading: false,
		}
	}

	render() {
		return (

			<div className='container my-4'>
				<h3><u>NewsMonkey - Top Headlines</u></h3>

				<div className="row">

					{this.state.articles.map((element) => {
						return <div className="col-md-3" key={element.url} >
							<NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
						</div>
					})}

				</div>

			</div>
		)
	}
}


