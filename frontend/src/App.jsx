import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import About from "./components/About/About";
import ProtectedRoute from "./routes/protectedRoute";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./hooks/AuthProvider";

function App() {

  return (
    <div>
    <BrowserRouter>
    <AuthProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
              <Route path="/write" element={<Write />} />
            </Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/write" element={<Write />} /> */}
      </Routes>
    </AuthProvider>
    </BrowserRouter>
    <Toaster />
    </div>
  );
}

export default App;
