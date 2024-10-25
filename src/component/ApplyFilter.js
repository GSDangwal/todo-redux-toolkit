import React, { useState } from "react";
import { changeFilter } from "../redux/filterSlice";
import { useDispatch } from "react-redux";

export default function ApplyFilter() {
  const dispatch = useDispatch();
  const [selectFilter, setSelectedFilter] = useState("1");
  const handleSelect = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
      <p className="small mb-0 me-2 text-muted">Filter</p>
      <select data-mdb-select-init onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
        <option value="Has due date">Has due date</option>
      </select>
      <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
      <select data-mdb-select-init>
        <option value="1">Added date</option>
        <option value="2">Due date</option>
      </select>
      <a
        href="#!"
        style={{ color: "#23af89" }}
        data-mdb-tooltip-init
        title="Ascending"
      >
        <i className="fas fa-sort-amount-down-alt ms-2"></i>
      </a>
    </div>
  );
}
