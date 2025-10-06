import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/service" element={<Service />} />
        <Route path ="/register" element={<Register />} />
        <Route path ="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
};

export default App;