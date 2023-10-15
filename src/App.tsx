import DropdownMenu from "./components/DropdownMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Search from "./components/Search";
import Title from "./components/Title";
import About from "./components/about";

const App = () => {
  return (
    <Router>
      <DropdownMenu />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
