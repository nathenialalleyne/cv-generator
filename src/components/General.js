import React from "react";

export function GeneralInfo() {
  return (
    <div className="general-info">
      <div className="first-name-wrapper">
        <label htmlFor="first-name">First Name</label>
        <input id="first-name"></input>
      </div>
      <div className="last-name-wrapper">
        <label htmlFor="last-name">Last Name</label>
        <input id="last-name"></input>
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
