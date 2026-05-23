import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="overlay">

        <h1>Find Your Dream Job Today</h1>

        <p>
          Search thousands of jobs and get hired faster.
        </p>

        <button onClick={() => navigate("/jobs")} >
          Explore Jobs
        </button>

      </div>

    </div>
  );
}

export default HomePage;