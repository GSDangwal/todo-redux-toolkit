import React from "react";
import "./App.css";
import ShowTodo from "./component/ShowTodo";
import Textarea from "./component/Textarea";

function App() {
  return (
    <div className="App">
      {/* <h1 className='d-flex justify-content-center' style={{ margin: 20, color: "green" }}>Todo-App</h1> */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col h-100 ">
              <div className=" card rounded-md bg-[#eff1f2] h-100 " id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>
                  <Textarea />
                  <hr className="my-4" />
                  <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p className="small mb-0 me-2 text-muted">Filter</p>
                    <select data-mdb-select-init>
                      <option value="1">All</option>
                      <option value="2">Completed</option>
                      <option value="3">Active</option>
                      <option value="4">Has due date</option>
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
                  <ShowTodo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
