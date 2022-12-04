import { useEffect } from "react";
import { education } from "../App";

export function AddEducation(prop) {
  let visibility = prop.vis;

  const deleteEducation = () => {
    visibility(false);
  };

  const addEducation = () => {
    visibility(false);

    let schoolObj = {
      company: "",
      startDate: "",
      endDate: "",
      jobTitle: "",
    };

    let schoolName = document.getElementById("school-name");
    let dateStarted = document.getElementById("date-started");
    let dateEnded = document.getElementById("date-ended");
    let studyName = document.getElementById("study-title");

    schoolObj.company = schoolName.value;
    schoolObj.startDate = dateStarted.value;
    schoolObj.endDate = dateEnded.value;
    schoolObj.jobTitle = studyName.value;

    education.push(schoolObj);
  };
  return (
    <div>
      <div className="school-name-wrapper">
        <label htmlFor="school-name">School Name</label>
        <input id="school-name"></input>
      </div>
      <div className="date-started-wrapper">
        <label htmlFor="date-started">Date Started</label>
        <input id="date-started" type="date"></input>
      </div>
      <div className="date-ended-wrapper">
        <label htmlFor="date-ended">Until</label>
        <input id="date-ended" type="date"></input>
      </div>
      <div className="study-title-wrapper">
        <label htmlFor="study-title">Subject Studied</label>
        <input id="study-title"></input>
      </div>
      <button onClick={deleteEducation}>Delete</button>
      <button onClick={addEducation}>Add</button>
    </div>
  );
}
