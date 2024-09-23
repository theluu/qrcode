import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./Pages/QRCodeGenerator"; // Adjust the import path as necessary
import Blog from "./Pages/Blog"; // Create this component
import About from "./Pages/About"; // Create this component
import Product from "./Pages/Product"; // Create this component
import Support from "./Pages/Support"; // Create this component
import Contact from "./Pages/Contact"; // Create this component 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<QRCodeGenerator />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;