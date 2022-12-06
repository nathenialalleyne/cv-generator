import React from "react";
import { useState } from "react";

export function GeneralInfo(prop) {
  let setFirstNameInput = prop.firstName;
  let setLastNameInput = prop.lastName;
  let setJobTitleInput = prop.title;

  let firstChange = (x) => setFirstNameInput(x.target.value);
  let lastChange = (x) => setLastNameInput(x.target.value);
  let titleChange = (x) => setJobTitleInput(x.target.value);

  return (
    <div className="general-info">
      <div className="first-name-wrapper">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name" onChange={firstChange}></input>
      </div>
      <div className="last-name-wrapper">
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" onChange={lastChange}></input>
      </div>
      <div className="job-title-wrapper">
        <label htmlFor="job-title">Job Title</label>
        <input id="job-title" onChange={titleChange}></input>
      </div>
      <div className="email-wrapper">
        <label htmlFor="email">Email Address</label>
        <input id="email"></input>
      </div>
      <div className="phone-number-wrapper">
        <label htmlFor="phone-number">Phone Number</label>
        <input id="phone-number"></input>
      </div>
    </div>
  );
}
