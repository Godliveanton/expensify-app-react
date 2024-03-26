import moment from "moment";
import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should return default state", () => {
  const state = expensesReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense when correct Id given", () => {
  const state = expensesReducers(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense when incorrect Id given", () => {
  const state = expensesReducers(expenses, {
    type: "REMOVE_EXPENSE",
    id: "4",
  });
  expect(state).toEqual(expenses);
});

test("should add expense to state", () => {
  const newExpense = {
    id: "4",
    description: "food",
    note: "",
    amount: 2000,
    createdAt: moment(0).subtract(6, "days").valueOf(),
  };
  const state = expensesReducers(expenses, {
    type: "ADD_EXPENSE",
    expense: newExpense,
  });
  expect(state).toEqual([...expenses, newExpense]);
});

test("should Edit the expense when correct Id given", () => {
  const newExpense = {
    id: "2",
    description: "Company Tour",
    note: "",
    amount: 3000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  };
  const state = expensesReducers(expenses, {
    type: "EDIT_EXPENSE",
    id: "2",
    expense: newExpense,
  });
  expect(state[1].description).toBe(newExpense.description);
});

test("should not Edit the expense when incorrect Id given", () => {
  const newExpense = {
    id: "4",
    description: "Company Tour",
    note: "",
    amount: 3000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  };
  const state = expensesReducers(expenses, {
    type: "EDIT_EXPENSE",
    id: "4",
    expense: newExpense,
  });
  expect(state).toEqual(expenses);
});
