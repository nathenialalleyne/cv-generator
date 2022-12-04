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
  const workClick = () => {
    setWorkVisible(true);
  };
  const schoolClick = () => {
    setSchoolVisible(true);
  };
  return (
    <div className="App">
      <GeneralInfo />
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
  );
}

export default App;
