import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Dogs } from "./pages/dogs";
import { Cats } from "./pages/cats";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cats" element={<Cats/>} />
          <Route path="/dogs" element={<Dogs/>} />
        </Routes>
      </Router>
    </div>
  );
  }
