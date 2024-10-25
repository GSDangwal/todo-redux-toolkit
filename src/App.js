import React from "react";
import "./App.css";
import Todos from "./component/Todos";
import Textarea from "./component/Textarea";
import ApplyFilter from "./component/ApplyFilter";

function App() {
  return (
    <div className="App">
      {/* <h1 className='d-flex justify-content-center' style={{ margin: 20, color: "green" }}>Todo-App</h1> */}
      <section className="vh-100">
        <div className="container py-5 px-5  ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col  ">
              <div
                className=" card rounded-md bg-[#eff1f2] min-h-[90vh]"
                id="list1"
              >
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>
                  <Textarea />
                  <hr className="my-4" />
                  <ApplyFilter />
                  <Todos />
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
