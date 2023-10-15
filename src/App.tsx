import "./App.css";
import Search from "./components/Search";
import Output from "./components/Output";

const App = () => {
  return (
    <>
      <div className="search">
        <Search />
      </div>
      <div className="output">
        <Output />
      </div>
    </>
  );
};

export default App;
