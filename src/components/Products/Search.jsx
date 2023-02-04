import React  from 'react'

import Card from '../UI/Card'

import './Search.css'

const Search = React.memo(({product, setProduct }) => {

  const SreachFunc = (inputValue)=>{
    console.log(inputValue);
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input type="text" value={product.title}   onChange={(e)=>SreachFunc(e.target.value)} />
        </div>
      </Card>
    </section>
  )
})

export default Search
