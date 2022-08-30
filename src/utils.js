import { month } from "./globalVariables";

export const noop = () => {};


export const DataTransform = (dataField, field, response) => {
  let data = [];
  response[field].forEach((element) => {
    let temp = {};
    dataField.forEach((item) => {
      if (item == "created_at") {
        let date = new Date(element[item]);
        temp[item] =
          date.getDate() +
          " " +
          month[date.getMonth()] +
          " " +
          date.getFullYear();
      } else {
        temp[item] = element[item];
      }
    });
    data.push(temp);
  });
  return data;
};
