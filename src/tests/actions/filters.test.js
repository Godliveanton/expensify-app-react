import moment from "moment";
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should return setText action object when value provided", () => {
  const text = "mike";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should return setText action object when no value provided", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should return startDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should return endDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should return action object with type SORT_BY_AMOUNT", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should return action object with type SORT_BY_DATE", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});
