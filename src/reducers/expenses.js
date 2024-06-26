const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {
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
