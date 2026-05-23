import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobsPage() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      salary: "₹12 LPA",
      type: "Remote",
      description:"Build responsive user interfaces using React.js and modern frontend technologies.",
      skills: "React.js, JavaScript, HTML, CSS",
      experience: "1-3 Years",
      location: "Bangalore",
    },

    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      salary: "₹15 LPA",
      type: "Full-Time",
      description:"Develop APIs and scalable backend systems using Node.js.",
      skills: "Node.js, Express.js, MongoDB",
      experience: "2-4 Years",
      location: "Hyderabad",
    },

    {
      id: 3,
      title: "UI/UX Designer",
      company: "Adobe",
      salary: "₹10 LPA",
      type: "Remote",
      description:"Design attractive and user-friendly interfaces.",
      skills: "Figma, Adobe XD, Photoshop",
      experience: "1-2 Years",
      location: "Delhi",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      <h1>Available Jobs</h1>

      <div className="search-container">

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="jobs-grid">

        {filteredJobs.map((job) => (

          <div
            className="job-card"
            key={job.id}
            onClick={() =>
              navigate("/jobdetails", {
                state: job,
              })
            } >

            <h2>{job.title}</h2>

            <p>
              <b>Company:</b> {job.company}
            </p>

            <p>
              <b>Salary:</b> {job.salary}
            </p>

            <p>
              <b>Type:</b> {job.type}
            </p>

            <button>
              View Details
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default JobsPage;