import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AddItem from "./pages/AddItem";
import ViewItem from "./pages/ViewItem";
import Home from "./pages/Home";

function App() {

  return (
    <div className="h-screen flex flex-col">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="add_item" element={<AddItem />} />
      <Route path="view_item" element={<ViewItem />} />
    </Routes>
    </div>
  )
}

export default App
