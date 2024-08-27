import React from 'react'

const Detail = ({selected,closeDetail}) => {
  return (
    
    <section className="detail">
    <div className='content'>
      <h1>{selected.Title} </h1>
      <span>{selected.Year}</span>
      <p className='rating'>
        Rating:{selected.imdbRating}
      </p>
    </div>
    <div className='about'>
        <img src={selected.Poster} alt=""></img>
        <p> {selected.Plot}</p>
        <button className='close' onClick={closeDetail}>Close</button>
    </div>
    
    </section>
                                    
  )
}

export default Detail
