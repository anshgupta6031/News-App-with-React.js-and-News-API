



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
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" imageUrl="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/FiPDscbNY5Cn4vKcuwvfDx0jW-Q=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/UZPCJ6YFK76P7DSECRKMCJLQ3M.jpg" />
          </div>

          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>

          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>

      </div>
    )
  }
}


