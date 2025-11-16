// src/__tests__/Task.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "../components/Task"; // adjust path if needed

describe("Task component", () => {
  const task = { text: "Learn React", category: "Work" };
  const onDeleteTask = jest.fn(); // must match prop name in Task component

  test("renders the task text and category", () => {
    render(<Task task={task} onDeleteTask={onDeleteTask} />);

    expect(screen.getByText(task.text)).toBeInTheDocument();
    expect(screen.getByText(task.category)).toBeInTheDocument();
  });

  test("calls delete handler when delete button is clicked", () => {
    render(<Task task={task} onDeleteTask={onDeleteTask} />);

    const button = screen.getByText("X");
    fireEvent.click(button);

    expect(onDeleteTask).toHaveBeenCalledTimes(1); // now works
  });
});
