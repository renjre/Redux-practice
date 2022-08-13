import React from 'react'

function Home(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    

  return(
    <div>
        <h2>Redux practice</h2>
    </div>
  )
}

export default Home