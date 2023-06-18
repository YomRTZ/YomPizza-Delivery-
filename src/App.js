import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import Menu from "./pages/Menu";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
    <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
