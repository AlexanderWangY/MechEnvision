import { useState } from "react";
import "./styles/search.css";

const Search = () => {
  const [data, setData] = useState("");
  const [inputtedData, setInputtedData] = useState(false);
  async function postText() {
    const request = {
      userInput: data,
    };
    const response = await fetch("http://34.201.71.236:8080/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(request),
    });

    const textResponse = await response.json();
    console.log(textResponse);
  }

  function handleSubmit() {
    console.log(`You inputted ${data}`);
    setData("");
    setInputtedData(true);
    console.log(`hello ${inputtedData}`);
  }

  return (
    <>
      <div className={`searchWrapper ${inputtedData ? "expanded" : ""}`}>
        <input
          type="text"
          id="inputForm"
          name="myInput"
          placeholder="Enter..."
          value={data}
          onChange={(event) => setData(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
            postText();
          }}
        >
          &#8626;
        </button>
      </div>
    </>
  );
};

export default Search;
