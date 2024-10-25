import { useState } from "react";
import { useDispatch } from "react-redux";
import { edit, isChecked, remove } from "../redux/textSlice";
import editIcon from "../images/editIcon.svg?url";
import trash from "../images/trash.svg?url";
import info from "../images/info.svg?url";
import { convertTimestamp } from "../utils/constant";

function DisplayTodo({ item, index, isCompleted, date }) {
  const [isEdit, updateEdit] = useState(false);
  const [editText, updateText] = useState(item);

  const dispatch = useDispatch();

  function handleClick() {
    if (editText.trim().length > 0) {
      dispatch(edit({ editText, index }));
      updateEdit(false);
    } else {
      return null;
    }
  }

  function handleCheckBox() {
    if (!isCompleted) {
      dispatch(isChecked({ index }));
    }
  }

  return isEdit ? (
    <div className="d-flex flex-row align-items-center">
      <input
        type="text"
        className="form-control form-control-lg"
        id="exampleFormControlInput1"
        placeholder="Edit..."
        value={editText}
        onChange={(e) => updateText(e.target.value)}
      />
      <a href="#!" data-mdb-tooltip-init title="Set due date">
        <i className="fas fa-calendar-alt fa-lg me-3"></i>
      </a>
      <div>
        <button
          type="button"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  ) : (
    <>
      <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
        <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div className="form-check">
            <input
              className="form-check-input me-0"
              type="checkbox"
              value=""
              id="flexCheckChecked1"
              aria-label="..."
              onChange={handleCheckBox}
              checked={isCompleted}
            />
          </div>
        </li>
        <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p className="lead fw-normal mb-0">{item}</p>
        </li>
        <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div className="d-flex flex-row justify-content-end mb-1">
            <img
              data-mdb-tooltip-init
              title="Edit-Todo"
              src={editIcon}
              alt=""
              className="px-4"
              onClick={() => updateEdit(true)}
            />

            <img
              data-mdb-tooltip-init
              title="Delete-Todo"
              src={trash}
              alt=""
              onClick={() => dispatch(remove({ index }))}
            />
          </div>
          <div className="text-end text-muted">
            <p
              data-mdb-tooltip-init
              title="Created date"
              className="small mb-0"
            >
              <img className="me-2 inline-block" src={info} alt="" />
              {convertTimestamp(date)}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default DisplayTodo;
