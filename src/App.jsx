import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Calendar from "./pages/Calendar";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
