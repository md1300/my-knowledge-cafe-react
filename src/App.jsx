
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {
  const [booksmarks,setBooksmarks]=useState([])

  const [readingTime,setReadingTime]=useState(0)

  const handleToBooksmark=(booksmark)=>{
    const newBooksmark=[...booksmarks,booksmark]

    console.log(newBooksmark)
    setBooksmarks(newBooksmark)
  }

  const handleMarkAsRead=(time,id)=>{
    // const newReadingTime =
    // console.log('successfully connected')
    const newReadingTime=(readingTime+time)
    setReadingTime(newReadingTime)

    // remove item
    const remainingBooksmark=booksmarks.filter(booksmark=>booksmark.id !== id)
    setBooksmarks(remainingBooksmark)
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs 
        handleToBooksmark={handleToBooksmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Booksmarks 
        booksmarks={booksmarks}
        readingTime={readingTime}
        ></Booksmarks>
      </div>
      
      
      
   
    </>
  )
}

export default App
