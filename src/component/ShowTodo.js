import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, edit } from "../redux/textSlice";
import { array } from "../utils/constant";
import editIcon from "../images/editIcon.svg?url";
import trash from "../images/trash.svg?url";
import info from "../images/info.svg?url";
import DisplayItem from "./DisplayItem";

function ShowItem({ item, index }) {
  const [isEdit, updateEdit] = useState(false);
  const [editText, updateText] = useState(item);
  const dispatch = useDispatch();

  function handleClick() {
    if (editText.length > 0) {
      dispatch(edit({ editText, index }));
      updateEdit(false);
    } else {
      return null;
    }
  }

  return isEdit ? (
    <div>
      <textarea
        value={editText}
        onChange={(e) => updateText(e.target.value)}
      ></textarea>
      <button className="btn btn-success" onClick={handleClick}>
        Save
      </button>
    </div>
  ) : (
    <div>
      <div className="card-header"># {index + 1}</div>
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <button className="btn btn-secondary" onClick={() => updateEdit(true)}>
          edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(remove({ index }))}
        >
          remove
        </button>
      </div>
    </div>
  );
}

function ShowTodo() {
  const state = useSelector((state) => state.item);
  return (
    // <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
    //   {state.map((item, index) => {
    //     return (
    //       <div
    //         key={index.toString()}
    //         className="card text-white bg-info mb-4 col"
    //         style={{ maxWidth: "18rem", margin: 10 }}
    //       >
    //         <ShowItem item={item} index={index} key={index.toString()} />
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="h-[37%]  overflow-scroll ">
      {state.map((item, index) => {
        return (
          // <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
          //   <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          //     <div className="form-check">
          //       <input
          //         className="form-check-input me-0"
          //         type="checkbox"
          //         value=""
          //         id="flexCheckChecked1"
          //         aria-label="..."
          //         checked
          //       />
          //     </div>
          //   </li>
          //   <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          //     <p className="lead fw-normal mb-0">{item}</p>
          //   </li>
          //   <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          //     <div className="d-flex flex-row justify-content-end mb-1">
          //       <img
          //         data-mdb-tooltip-init
          //         title="Edit-Todo"
          //         src={editIcon}
          //         alt=""
          //         className="px-4"
          //       />

          //       <img
          //         data-mdb-tooltip-init
          //         title="Delete-Todo"
          //         src={trash}
          //         alt=""
          //       />
          //     </div>
          //     <div className="text-end text-muted">
          //       <p
          //         data-mdb-tooltip-init
          //         title="Created date"
          //         className="small mb-0"
          //       >
          //         <img className="me-2 inline-block" src={info} alt="" />
          //         28th Jun 2020
          //       </p>
          //     </div>
          //   </li>
          // </ul>
          <DisplayItem item={item} index={index} key={index.toString()} />
        );
      })}
    </div>
  );
}

export default ShowTodo;
