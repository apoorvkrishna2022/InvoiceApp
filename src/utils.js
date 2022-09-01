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


export const InvoiceDataTransform=(dataField, response)=>{
  // console.log("response", response);
  let data=[];
  response.forEach((element)=>{
    let temp={};
    dataField.forEach((item)=>{
      if (item == "CreatedAt") {
        let date = new Date(element[item]);
        temp[item] =
          date.getDate() +
          " " +
          month[date.getMonth()] +
          " " +
          date.getFullYear();
      } else if (item == "AmountDue") {
        if (element["PaidStatus"] == "paid") {
          temp[item] = 0;
        } else {
          temp[item] = element["TotalAmount"];
        }
      } else {
        temp[item] = element[item];
      }
      
      
    });
    data.push(temp);
    

  });
  // console.log("response return ", data);
  return data;
};