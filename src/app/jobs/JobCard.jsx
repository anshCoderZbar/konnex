import React from "react";

export const JobCard = ({ jobs, key }) => {
  return (
    <li key={key}>
      <div class="row">
        <div class="large-9 medium-8 column">
          <a
            class="title"
            // href="top-jobs-fuer-studierende/index.html"
          >
            {jobs?.title}
          </a>
          <p class="descp">
            {jobs?.description.length <= 325
              ? jobs?.description
              : jobs?.description.slice(0, 325) + "..."}
          </p>
        </div>
        <div class="large-3 medium-4 column">
          <p class="location">
            <strong>{jobs?.location}</strong>
          </p>
          <p class="date">{jobs?.date}</p>
          <div class="link-wrapper">
            <a
              class="ghost-btn blue medium"
              href="top-jobs-fuer-studierende/index.html"
            >
              <i class="icon-Pfeil-rechts"></i>Details
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
