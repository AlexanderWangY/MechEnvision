import { useState } from "react";
import "./styles/search.css";

const Search = () => {
  const [data, setData] = useState("");

  async function postText() {
    const request = {
      textInput: data,
    };
    const response = await fetch("http://54.88.194.151:8080/generate/", {
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
  );
};

export default Search;
