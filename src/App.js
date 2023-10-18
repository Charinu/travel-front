import React, { useState, useEffect } from 'react'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://important-erin-chipmunk.cyclic.app/attractions')
    .then(res => res.json())
    .then((result)=> {
      console.log(result)
      setItems(result)
    })
  }, [])

  return (
    <div>
      <ul>  
      { items.map((item)=> (
        <li key = {item.id}>
          {item.name}
         </li>
      ))}
      </ul>
    </div>
  )
}

export default App