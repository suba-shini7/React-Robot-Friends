import React from 'react'

export const SearchBox = ({setSearch,onSearch}) => {
  return (
    <div className='pa2'>
        <input
        className='pa3 ba b--green bg-lightest-blue '
    type='text'
    placeholder='search robots'
    onChange={onSearch}/>
    </div>
    
  )
}
