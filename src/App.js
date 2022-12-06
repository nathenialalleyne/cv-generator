import { render } from "@testing-library/react";
import { useState } from "react";
import { GeneralInfo } from "./components/General";
import { AddExperience } from "./components/Work";
import { AddEducation } from "./components/Education";

export let basicInfo = [];
export let experience = [];
export let education = [];

function App() {
  const [workVisible, setWorkVisible] = useState(false);
  const [schoolVisible, setSchoolVisible] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [jobTitleInput, setJobTitleInput] = useState("");

  let fullName = firstNameInput + " " + lastNameInput;
  const workClick = () => {
    setWorkVisible(true);
  };
  const schoolClick = () => {
    setSchoolVisible(true);
  };

  return (
    <div className="App">
      <div className="half">
        <GeneralInfo
          firstName={setFirstNameInput}
          lastName={setLastNameInput}
          title={setJobTitleInput}
        />

        <div className="work-experience">
          <button onClick={workClick}>+ Add Experience</button>
          <div>
            {workVisible ? (
              <AddExperience vis={setWorkVisible}></AddExperience>
            ) : null}
          </div>
        </div>
        <div className="school-info">
          <button onClick={schoolClick}>+ Add School</button>
          <div>
            {schoolVisible ? (
              <AddEducation vis={setSchoolVisible}></AddEducation>
            ) : null}
          </div>
        </div>
      </div>
      <div className="display-cv">
        <div className="cv">
          <div className="displayed-top">
            <div className="displayed-name">{fullName}</div>
            <div className="job-title">{jobTitleInput}</div>
          </div>
          <div className="experience"></div>
          <div className="info">
            <div className="contact">
              Contact
              <div className="email">testemail@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
