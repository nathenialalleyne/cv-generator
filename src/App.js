import { render } from "@testing-library/react";
import { useState } from "react";
import { useEffect } from "react";

import { GeneralInfo } from "./components/General";
import { AddExperience } from "./components/Work";
import { AddEducation } from "./components/Education";
import { AddWorkItem } from "./components/ShowWork";

export let basicInfo = [];
export let experience = [];
export let education = [];

let num = 0;

function App() {
  const [companyName, setCompanyName] = useState("");
  const [addWork, setAddWork] = useState([]);
  const [displayWork, setDisplayWOrk] = useState([]);
  const [workCV, setWorkCV] = useState();

  const [workVisible, setWorkVisible] = useState(false);
  const [schoolVisible, setSchoolVisible] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [jobTitleInput, setJobTitleInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  const [linkedInInput, setLinkedInInput] = useState("");

  let fullName = firstNameInput + " " + lastNameInput;
  const workClick = async () => {
    setAddWork(
      addWork.concat(
        <AddExperience
          key={num}
          set={setCompanyName}
          onChangeValue={(e) => {
            setCompanyName(e.value);
          }}
        />
      )
    );
    setDisplayWOrk(addWork);
    setWorkCV(<AddWorkItem key={num} name={companyName} />);
    num += 1;
  };

  const schoolClick = () => {
    <AddEducation />;
  };

  return (
    <div className="App">
      <div className="half">
        <GeneralInfo
          firstName={setFirstNameInput}
          lastName={setLastNameInput}
          title={setJobTitleInput}
          email={setEmailInput}
          phone={setPhoneNumberInput}
          linkedIn={setLinkedInInput}
        />

        <div className="work-experience">
          <button
            onClick={() => {
              workClick();
            }}
          >
            + Add Experience
          </button>
          {addWork}
          <div></div>
        </div>
        <div className="school-info">
          <button
            onClick={() => {
              <AddEducation />;
            }}
          >
            + Add School
          </button>
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
              <div className="contact-header">Contact</div>
              <div className="contact-content">
                <div className="email">Email: {emailInput}</div>
                <div className="phone-number">
                  Phone Number: {phoneNumberInput}
                </div>
                <div className="linkedIn">LinkedIn: {linkedInInput}</div>
              </div>
            </div>

            <div className="work">
              <div className="work-header">Professional Experience</div>
              <div className="experience-container">{workCV}</div>
            </div>

            <div className="school">
              <div className="school-header">Education</div>
              <div className="school-container">
                <div className="school-content">
                  <div className="school-name">Test School</div>
                  <div className="school-study">Degree in Computer Science</div>
                  <div className="school-date">12/5/2000 - 12/5/2004</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
