import { Route, Routes, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import { useSelector } from "react-redux";
import "./App.css";
import { Explore, Home, Login, Profile, Signup, SinglePost } from "./pages";
import { ToasterWrapper } from "./utils";
import { PrivateRoute } from "./routes/PrivateRoutes";

function App() {
  const { token } = useSelector(state => state.auth);
  return (
    <div>
      <ToasterWrapper />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        {!token && <Route path="/signup" element={<Signup />} />}
        {!token && <Route path="/login" element={<Login />} />}
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
