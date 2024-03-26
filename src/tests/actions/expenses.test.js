import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should return add expense action object", () => {
  const expenseData = {
    description: "rent",
    amount: "200",
    createdAt: 0,
    note: "Rent for the month",
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should return add expense action object with defaults when no input provided", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});

test("should return remove expense action object", () => {
  const action = removeExpense({
    id: "123asd",
  });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123asd",
  });
});

test("should return edit expense action object", () => {
  const action = editExpense("123asd", {
    description: "rent",
    amount: "200",
    createdAt: 0,
    note: "Rent for the month",
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123asd",
    expense: {
      description: "rent",
      amount: "200",
      createdAt: 0,
      note: "Rent for the month",
    },
  });
});
