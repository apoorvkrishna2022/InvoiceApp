import React from "react";
import "./List.css";

const List = ({ data, field }) => {
  return (
    <table>
      <thead>
        <tr>
          {field.map((item, index) => {
            return <th key={index + 1}> {item}</th>;
          })}
        </tr>
      </thead>
      <tbody data-testid="list-body">
        {data.map((item, index) => {
          return (
            <tr key={index + 1}>
              {Object.values(item).map((temp, index) => (
                <td key={index + 1} className="tabe-data">
                  {temp}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
