import React from 'react'

export const AnimeInfo = (props) => {
    const {title, source, rank, score, popularity, members, status, rating, duration} = props.animeInfo;
  return (
    <div className='anime-content'>
        <h2>{title}</h2><br/>
        <img src={props.animeInfo.images.jpg.large_image_url} alt="" /><br/>
        <div className="info">
            <h3>#Rank: {rank}</h3>
            <h3>#Score: {score}</h3>
            <h3>#Popularity: {popularity}</h3>
            <h3>#members: {members}</h3>
            <h3>#Source: {source}</h3>
            <h3>#Status: {status}</h3>
            <h3>#Rating: {rating}</h3>
            <h3>#Duration: {duration}</h3>
        </div>

        
    </div>
  )
}
