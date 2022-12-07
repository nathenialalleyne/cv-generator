import React from "react";
import { useState } from "react";

export function GeneralInfo(prop) {
  let setFirstNameInput = prop.firstName;
  let setLastNameInput = prop.lastName;
  let setJobTitleInput = prop.title;

  let setEmailInput = prop.email;
  let setPhoneNumberInput = prop.phone;
  let setLinkedInInput = prop.linkedIn;

  let firstChange = (x) => setFirstNameInput(x.target.value);
  let lastChange = (x) => setLastNameInput(x.target.value);
  let titleChange = (x) => setJobTitleInput(x.target.value);

  let emailChange = (x) => setEmailInput(x.target.value);
  let phoneChange = (x) => setPhoneNumberInput(x.target.value);
  let linkedInChange = (x) => setLinkedInInput(x.target.value);

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
        <input id="email" onChange={emailChange}></input>
      </div>
      <div className="phone-number-wrapper">
        <label htmlFor="phone-number">Phone Number</label>
        <input id="phone-number" onChange={phoneChange}></input>
      </div>
      <div className="linked-in-wrapper">
        <label htmlFor="linked-in">Phone Number</label>
        <input id="linked-in" onChange={linkedInChange}></input>
      </div>
    </div>
  );
}
