import React from 'react'

export const Card = ({name,id,email}) => {
  return (
    <div className='pa5 tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
        <img alt='robots' src={`https://robohash.org/${id}?set=set4&size=150x150`}>
        </img>
        <div>
        <h2>{name}
        </h2>
        <p>{email}</p>
        </div>
        
    </div>
  )
}
