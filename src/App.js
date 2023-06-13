import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.css";
import ProductLists from "./pages/ProductLists";
import ProductDetails from './pages/ProductDetails/ProuctDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productsList" element={<ProductLists />} />
        <Route path="/producDetails/:shoeName" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
