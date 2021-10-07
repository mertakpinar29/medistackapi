import React from 'react'
import NewsItem from './NewsItem'

const NewsTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.length ?
            items.map(item=>(
                <NewsItem key={item.url} item={item}></NewsItem>
            ))
            :
            <h1>Couldn't find a post with that keyword.</h1>
        }
    </section>
}

export default NewsTable