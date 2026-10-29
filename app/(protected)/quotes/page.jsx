"use client"
import React, { useState, useEffect } from 'react'
import QuoteCard from '@/components/QuoteCard'

const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);

  const myImages = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=5",
  ];

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch('https://dummyjson.com/quotes?limit=27');
        const data = await res.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuotes();
  }, []);

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {quotes.map((q, index) => {
          const image = myImages[index % myImages.length];
          return <QuoteCard key={q.id} quote={{ ...q, image }} />
        })}
      </div>
    </div>
  )
}

export default Dashboard