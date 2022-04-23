import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

//smoke test 
it("renders without crashing", function() {
  render(<ToDoList />);
});

//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});


// testing creates new to do
it("can add a new to do item", function() {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // no box in document to start (remove button has text "X")
  expect(queryByText("dishes")).not.toBeInTheDocument();
  expect(queryByText("X")).not.toBeInTheDocument();

  const itemInput = getByLabelText("Item:");
  const submitBtn = queryByText("Add To Do Item")

  // fill out the form
  fireEvent.change(itemInput, { target: { value: "dishes" }});
  fireEvent.click(submitBtn);

  // box in document
  expect(queryByText("dishes")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();
});


// testing removes to do
it("can remove to do item", function() {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  const itemInput = getByLabelText("Item:");
  const submitBtn = queryByText("Add To Do Item")

  // fill out the form
  fireEvent.change(itemInput, { target: { value: "dishes" }});
  fireEvent.click(submitBtn);

  // box in document
  expect(queryByText("dishes")).toBeInTheDocument();
  expect(queryByText("X")).toBeInTheDocument();

  // click on X button to remove the box
  const removeBtn = queryByText("X");
  fireEvent.click(removeBtn)

  // no to do items remain in document
  expect(queryByText("dishes")).not.toBeInTheDocument();
  expect(queryByText("X")).not.toBeInTheDocument();
});