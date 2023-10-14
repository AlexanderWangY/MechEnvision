import { useState } from "react";
import "./styles/search.css";

const Search = () => {
  const [data, setData] = useState("");

  function handleSubmit() {
    console.log(`You inputted ${data}`);
    setData("");
  }

  return (
    <div className="searchWrapper">
      <input
        type="text"
        id="inputForm"
        name="myInput"
        placeholder="Enter..."
        value={data}
        onChange={(event) => setData(event.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        &#8626;
      </button>
    </div>
  );
};

export default Search;
