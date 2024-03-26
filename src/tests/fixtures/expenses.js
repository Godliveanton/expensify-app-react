import moment from "moment";

export default [
  {
    id: "1",
    description: "water",
    note: "",
    amount: 1000,
    createdAt: 0,
  },
  {
    id: "2",
    description: "tour",
    note: "",
    amount: 3000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "rent",
    note: "",
    amount: 2000,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
