import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignUp from "./Components/Signup";
import About from "./Components/About";
import Information from "./Components/Information";
import Login from "./Components/Login";
import { AuthProvider } from "./Components/Auth";
import Admin from "./Components/Admin";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/information" element={<Information />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
