import "./App.css";
import Search from "./components/Search";
import Output from "./components/Output";

const App = () => {
  return (
    <>
      <div className="main">
        <Search />
      </div>
      <Output />
    </>
  );
};

export default App;
