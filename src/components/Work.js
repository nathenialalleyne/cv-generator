import { useEffect } from "react";
import { experience } from "../App";

export function AddExperience(prop) {
  let visibility = prop.vis;

  const deleteWork = () => {
    visibility(false);
  };

  const addWork = () => {
    visibility(false);

    let workObj = {
      company: "",
      startDate: "",
      endDate: "",
      jobTitle: "",
    };

    let companyName = document.getElementById("company-name");
    let dateStarted = document.getElementById("date-started");
    let dateEnded = document.getElementById("date-ended");
    let jobPosition = document.getElementById("position-title");

    workObj.company = companyName.value;
    workObj.startDate = dateStarted.value;
    workObj.endDate = dateEnded.value;
    workObj.jobTitle = jobPosition.value;

    experience.push(workObj);
  };
  return (
    <div>
      <div className="company-name-wrapper">
        <label htmlFor="company-name">Company Name</label>
        <input id="company-name"></input>
      </div>
      <div className="date-started-wrapper">
        <label htmlFor="date-started">Date Started</label>
        <input id="date-started" type="date"></input>
      </div>
      <div className="date-ended-wrapper">
        <label htmlFor="date-ended">Until</label>
        <input id="date-ended" type="date"></input>
      </div>
      <div className="position-title-wrapper">
        <label htmlFor="position-title">Position Title</label>
        <input id="position-title"></input>
      </div>
      <button onClick={deleteWork}>Delete</button>
      <button onClick={addWork}>Add</button>
    </div>
  );
}
