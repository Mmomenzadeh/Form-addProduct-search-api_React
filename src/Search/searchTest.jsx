import { useState } from "react";

import "./searchTest.css";

const App3 = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const searchHandel = (e) => {

    const filteredValues = filterList.filter(
      (item) => item.toLocaleLowerCase().indexOf(e.target.value) !== -1
    );

    e.target.value === "" ? setFilterList(list) : setFilterList(filteredValues);
  };

  return (
    <div className="app">
      <div>
        Search : <input type="text" onChange={searchHandel} />
      </div>
      { filterList.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
};

export default App3;
