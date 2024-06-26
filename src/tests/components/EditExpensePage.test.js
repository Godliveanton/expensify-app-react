import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      removeExpense={removeExpense}
      expense={expenses[1]}
    />
  );
});

test("should render edit page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test("should handle onRemove", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenCalledWith("/");
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
