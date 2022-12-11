import { useEffect } from "react";

export function AddWorkItem(prop) {
  useEffect(() => {}, [prop.name]);
  return (
    <div className="company">
      <div>{prop.name}</div>
      <div>{prop.title}</div>
      <div>{prop.testDate}</div>
    </div>
  );
}
