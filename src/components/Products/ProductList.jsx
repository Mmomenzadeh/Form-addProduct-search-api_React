import React from 'react'

import './ProductList.css'

const ProductList = ({product , deleteBtn}) => {
  return (
    <section className="product-list">
      <h2>محصولات</h2>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.amount}x</span>
            <button onClick={()=>deleteBtn(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
