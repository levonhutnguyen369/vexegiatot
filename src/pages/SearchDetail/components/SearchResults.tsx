import React from 'react'
import { ResultCard } from './ResultCard'

const SearchResults = () => {
  return (
    <div className='grid gap-3'>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
    </div>
  )
}

export default SearchResults