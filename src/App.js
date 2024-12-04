import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

import AddressPage from "./components/AddressPage";
import MainBlog from "./components/MainBlog";
import ArBlog from "./components/ArBlog";
import EarWaxBlog from "./components/EarWaxBlog";
import EndoscopyBlog from "./components/EndoscopyBlog";
import SeptoBlog from "./components/SeptoBlog";
import TestimonialPage from "./components/TestimonialPage";
import VoiceBlog from "./components/VoiceBlog";
import About from "./components/About";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route exact path="/" element={<Main />} />
          <Route exact path="/address" element={<AddressPage />} />
          <Route exact path="/blogpage" element={<MainBlog />} />
          <Route exact path="/testimonials" element={<TestimonialPage />} />
          <Route exact path="/about" element={<About />} />

          {/* Other Routes */}
          <Route exact path="/ar" element={<ArBlog />} />
          <Route exact path="/earwax" element={<EarWaxBlog />} />
          <Route exact path="/endoscopy" element={<EndoscopyBlog />} />
          <Route exact path="/septoplasty" element={<SeptoBlog />} />
          <Route exact path="/voice" element={<VoiceBlog />} />
        </Routes>

        <Cta />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
