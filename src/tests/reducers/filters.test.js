import filtersReducer from "../../reducers/filters";
import moment from "moment";

const defaultFiltersState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

test("should return a state with default values", () => {
  const result = filtersReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual(defaultFiltersState);
});

test("should return state with given text value", () => {
  const result = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "e",
  });
  expect(result).toEqual({
    ...defaultFiltersState,
    text: "e",
  });
});

test("should return sortBy with amount value", () => {
  const result = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT",
  });
  expect(result).toEqual({
    ...defaultFiltersState,
    sortBy: "amount",
  });
});

test("should return sortBy with date value", () => {
  const result = filtersReducer(undefined, {
    type: "SORT_BY_DATE",
  });
  expect(result).toEqual({
    ...defaultFiltersState,
    sortBy: "date",
  });
});

test("should return with the startDate mentioned", () => {
  const result = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(34),
  });
  expect(result).toEqual({
    ...defaultFiltersState,
    startDate: moment(34),
  });
});

test("should return with the endDate mentioned", () => {
  const result = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(677),
  });
  expect(result).toEqual({
    ...defaultFiltersState,
    endDate: moment(677),
  });
});
