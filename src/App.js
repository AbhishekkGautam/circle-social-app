import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Home, Login, Profile, Signup, SinglePost } from "./pages";
import { ToasterWrapper } from "./utils";

function App() {
  return (
    <div>
      <ToasterWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
