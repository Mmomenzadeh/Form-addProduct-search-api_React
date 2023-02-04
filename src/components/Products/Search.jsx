import React, { useState } from "react";

import Card from "../UI/Card";

import "./Search.css";

const Search = React.memo(({ product, setProduct }) => {
  const [searchItem, setSreachItem] = useState("");

  const Search = () => {
    const searchProduct = product.filter((item)=>{
      return item.title == searchItem
    })

    console.log(searchProduct);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSreachItem(e.target.value)}
            onKeyDown={Search()}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
