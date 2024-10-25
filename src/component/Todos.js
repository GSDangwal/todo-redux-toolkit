import React, { useState } from "react";
import { useSelector } from "react-redux";
import DisplayTodo from "./DisplayTodo";

function Todos() {
  const { todos, filter } = useSelector((state) => state);
  return (
    <div className="h-[37%]  overflow-scroll ">
      {todos.map((item, index) => {
        return filter !== "All" ? (
          item.isCompleted && (
            <DisplayTodo
              item={item.title}
              index={index}
              key={index.toString()}
              isCompleted={item.isCompleted}
              date={item.date}
            />
          )
        ) : (
          <DisplayTodo
            item={item.title}
            index={index}
            key={index.toString()}
            isCompleted={item.isCompleted}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default Todos;
