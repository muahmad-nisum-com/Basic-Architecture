import './App.css';
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Users from "./components/Users";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

function App() {
  return (

    <main>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </main>
  );
}

export default App;
