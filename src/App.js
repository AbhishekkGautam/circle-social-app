import { Route, Routes, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import { Explore, Home, Login, Profile, Signup, SinglePost } from "./pages";
import { ToasterWrapper } from "./utils";

function App() {
  return (
    <div>
      <ToasterWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
