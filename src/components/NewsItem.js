import React from 'react'
import moment from 'moment'

const NewsItem = ({item}) => {

    return (
    <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          {
            item.image ? 
            <img src={ item.image } alt={ item?.title }/> : 
            // placeholder image if item.image is null
            <img src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' alt={item?.title} />
          }
        </div>
        <div className='content-back'>
          <h1>{item?.title}</h1>
          <ul>
            <li>
              <strong>Author:</strong> {item?.author}
            </li>
            <li>
              <strong>Description:</strong> {item?.description}
            </li>
            <li>
                <a className='btn' target='_blank' rel="noreferrer" href={item?.url}>Go the article</a>
            </li>
            <li>
              Published at: {moment(item?.published_at).fromNow()}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default NewsItem