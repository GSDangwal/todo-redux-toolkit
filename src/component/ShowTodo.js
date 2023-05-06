import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, edit } from "../redux/textSlice";

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
    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      {state.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className="card text-white bg-info mb-4 col"
            style={{ maxWidth: "18rem", margin: 10 }}
          >
            <ShowItem item={item} index={index} key={index.toString()} />
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodo;
