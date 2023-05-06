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
      dispatch(add(text));
      // const getItems = localStorage.getItem("ITEMS");
      // console.log(getItems);
      // if (getItems) {
      //   items = (JSON.parse(getItems), text);
      // } else {
      //   items.push(text);
      // }
      setItems([...items, text]);

      // let item = items;
      localStorage.setItem("ITEMS", JSON.stringify([...items, text]));
      updateText("");
    } else {
      return null;
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ margin: 20 }}>
      <div>
        <input
          className="form-control"
          value={text}
          onChange={(e) => updateText(e.target.value)}
          placeholder="Enter-Todo"
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div>
        <button className="btn btn-success" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Textarea;
