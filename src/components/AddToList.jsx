import React from "react";
import "./Mylist.css";

export const AddToList = ({ handleAddToList }) => {
  return (
    <div className="mylist" onClick={handleAddToList}>
      <p>Add To List +</p>
    </div>
  );
};

