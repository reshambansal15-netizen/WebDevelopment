import React from "react";
import { useLocation } from "react-router-dom";

function JobDetails() {

  const location = useLocation();

  const job = location.state;

  return (
    <div className="details-page">

      <div className="details-card">

        <h1>{job.title}</h1>

        <h2>{job.company}</h2>

        <p>
          <b>Salary:</b> {job.salary}
        </p>

        <p>
          <b>Job Type:</b> {job.type}
        </p>

        <p>
          <b>Experience:</b> {job.experience}
        </p>

        <p>
          <b>Location:</b> {job.location}
        </p>

        <p>
          <b>Skills Required:</b> {job.skills}
        </p>

        <p className="description">
          {job.description}
        </p>

        <button onClick={() => alert( `Application Submitted Successfully! 
                                      Job: ${job.title}
                                      Company: ${job.company}`)
          } >
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;