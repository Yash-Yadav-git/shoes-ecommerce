import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import ProductLists from "./pages/ProductLists";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productsList" element={<ProductLists />} />
      </Routes>
    </>
  );
}

export default App;
