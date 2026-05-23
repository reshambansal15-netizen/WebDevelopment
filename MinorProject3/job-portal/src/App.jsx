import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import NavBar from "./NavBar";

import HomePage from "./HomePage";
import JobsPage from "./JobsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

import JobDetails from "./JobDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/jobdetails" element={<JobDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;