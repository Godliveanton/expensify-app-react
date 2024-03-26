import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = (id, expense) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    expense,
  };
};

const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate,
  };
};

const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};

const expensesDefaultState = [];
const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) =>
        expense.id === action.id
          ? {
              ...expense,
              ...action.expense,
            }
          : expense
      );
    default:
      return state;
  }
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const visibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = visibleExpenses(state.expenses, state.filters);
  console.log(visibleExpense);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 2000, createdAt: -200 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "deposit", amount: 1500, createdAt: -100 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2000 }));
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(342));
// store.dispatch(setEndDate());

const demoStore = {
  expenses: [
    {
      id: "asdfe",
      description: "January Rent",
      note: "This is final payment for the address",
      amount: 5000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
