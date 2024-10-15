import "./App.css";
import React, { Component, useState } from "react";

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

const App = () => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList] = useState(todoItems);

  return (
    <div className="container">
      <h1 className="text-primary text-uppercase text-center my-4">Todo app</h1>
    </div>
  );
};

export default App;
