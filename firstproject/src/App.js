// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./contact";
import Blogs from "./Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}