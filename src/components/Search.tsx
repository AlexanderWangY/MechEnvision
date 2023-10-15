import { useState } from "react";
import "./styles/search.css";
import TextAnimation from "./TextAnimation";

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
    const response = await fetch(
      "https://4fbf-34-201-71-236.ngrok-free.app/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(request),
      }
    );
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
      <div className="wrapper">
        {inputtedData == true ? (
          ""
        ) : (
          <div className="ideas container1">
            <div style={{ textAlign: "left" }}>
              <TextAnimation
                prompts={[
                  "an autonomous RC car.",
                  "an auto-aligning solar panel.",
                  "an automatic door-opener.",
                ]}
              />
            </div>
          </div>
        )}
        <div className={`overwrapper ${inputtedData ? "overextend" : ""}`}>
          <div className={`searchWrapper ${inputtedData ? "expanded" : ""} `}>
            <input
              type="text"
              autoComplete="off"
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
              {dataReceived ? <div>&#10227;</div> : <div>&#8674;</div>}
            </button>
          </div>
          {dataReceived == false && inputtedData == true ? (
            <div>Cooking up a project...</div>
          ) : (
            ""
          )}
          {dataReceived && <div className="results">Results</div>}

          {dataReceived && (
            <div className={`output-container`}>
              <div className="output-container-ui">
                <div className="materials">
                  <li className="liTitle">Parts</li>
                  {materials.map((item) => (
                    <a href={`${item.url}`} target="_blank">
                      <li>
                        {item.generalName}: {item.specificName}
                      </li>
                    </a>
                  ))}
                </div>
                <div className="resources">
                  <li className="liTitle">Resources</li>
                  {resources.map((item) => (
                    <a href={`${item.url}`} target="_blank">
                      <li>{item.name}</li>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
