
import React, {useState} from "react";
import "./List.css"





const List =({data, field})=>{

    return (
        <table>
            <thead>
                <tr>
                    {field.map((item, index)=>{ return (<th key={index+1}> {item}</th>);})}
                </tr>
            </thead>
                <tbody>
                    {data.map(item=>{return (
                                            <tr> 
                                                {Object.values(item).map((temp, index)=><td key={index+1} className="tabe-data">{temp}</td>)}
                                            </tr>
                                            );
                            })}
                </tbody>
        </table>
    );

}

export default List;