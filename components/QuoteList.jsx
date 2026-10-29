

import React from 'react'
import QuoteCard from './QuoteCard'

const QuoteList = ({quotes}) => {
  return (
    <div className='grid grid-cols-2 gap-8 bg-[#E7F0FF] rounded-2xl p-6'>
      {quotes.map((quote) => (
        <QuoteCard
        key={quote.id}
        quote={quote}
        />
      ))

      }
    </div>
  )
}

export default QuoteList
