import { render, screen, fireEvent } from "@testing-library/react";
import List from "../../List/List";
import { cusTableField } from "../../../globalVariables";
const customerData = [
  {
    name: "Apoorv",
    phone: "1234567890",
    email: "apoorv@gmail.com",
    createdOn: "12 Aug 2022",
  },
  {
    name: "Apoorv",
    phone: "1234567890",
    email: "apoorv@gmail.com",
    createdOn: "12 Aug 2022",
  },
  {
    name: "Apoorv",
    phone: "1234567890",
    email: "apoorv@gmail.com",
    createdOn: "12 Aug 2022",
  },
  {
    name: "Apoorv",
    phone: "1234567890",
    email: "apoorv@gmail.com",
    createdOn: "12 Aug 2022",
  },
];

test("testing Customer List", ()=>{
    render(<List data={customerData} field={cusTableField} />);
    const tableRowElements = screen.getByTestId("list-body");
    expect(tableRowElements.children.length).toBe(4);

});