import React from "react";
import "./Mylist.css";

export const RemoveFromList = ({ handleRemoveToList }) => {
  return (
    <div className="mylist" onClick={handleRemoveToList}>
      <p>Remove To List -</p>
    </div>
  );
};
