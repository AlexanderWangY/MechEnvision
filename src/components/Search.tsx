import { useState } from "react";
import "./styles/search.css";

const Search = () => {
  const [data, setData] = useState("");
  const [dataReceived, setDataReceived] = useState(false);
  const [inputtedData, setInputtedData] = useState(false);
  const [materials, setMaterials] = useState([
    {
      defaults: "test",
      generalName: "test",
      specificName: "test",
      url: String,
    },
  ]);
  const [resources, setResources] = useState([
    {
      name: "test",
      url: String,
    },
  ]);
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
    setDataReceived(true);
    const textResponse = await response.json();
    setMaterials(textResponse.parts);
    setResources(textResponse.resources);
    console.log(textResponse.resources);
  }

  function handleSubmit() {
    console.log(`You inputted ${data}`);
    setDataReceived(false);
    setData("");
    setInputtedData(true);
    console.log(`hello ${inputtedData}`);
  }

  return (
    <>
      <div className={`overwrapper ${inputtedData ? "overextend" : ""}`}>
        <div className={`searchWrapper ${inputtedData ? "expanded" : ""} `}>
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
        {dataReceived && <div className="results">Results</div>}

        {!dataReceived && inputtedData && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}
        {dataReceived && (
          <div className={`output-container`}>
            <div className="output-container-ui">
              <div className="materials">
                {materials.map((item) => (
                  <li>
                    {item.generalName}: {item.specificName} [
                    <a href={`${item.url}`} target="_blank">
                      link
                    </a>
                    ]
                  </li>
                ))}
              </div>
              <div className="resources">
                {resources.map((item) => (
                  <li>
                    {item.name} [
                    <a href={`${item.url}`} target="_blank">
                      link
                    </a>
                    ]
                  </li>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
