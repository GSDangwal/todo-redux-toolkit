import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/textSlice";
import "../App.css";

const Textarea = (props) => {
  const [text, updateText] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  // let item;

  useEffect(() => {
    if (localStorage.getItem("ITEMS")) {
      const getList = JSON.parse(localStorage.getItem("ITEMS"));
      setItems(getList);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.Key === "Enter") {
      e.preventDefault();
      handleClick();
      console.log("handler");
    }
  };

  const handleClick = () => {
    if (text.length > 0) {
      dispatch(add({ title: text, date: Date.now(), isCompleted: false }));
      // const getItems = localStorage.getItem("ITEMS");
      // console.log(getItems);
      // if (getItems) {
      //   items = (JSON.parse(getItems), text);
      // } else {
      //   items.push(text);
      // }
      setItems([...items, text]);

      // let item = items;
      localStorage.setItem(
        "ITEMS",
        JSON.stringify([
          ...items,
          { title: text, date: Date.now(), isCompleted: false },
        ])
      );
      updateText("");
    } else {
      return null;
    }
  };

  return (
    <div className="pb-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add new..."
              value={text}
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
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
