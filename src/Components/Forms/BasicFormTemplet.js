import React, {useState} from "react";

import '../Forms/BasicFormTemplet.css';
import Button from "../Button/Button";

const generateFormData = (fields) => {
    const formData = {};
  
    fields.forEach((field) => {
      formData[field.name] = {
        ...field,
        isValid: true
      };
    });
    
    return formData;
  };

const BasicFormTemplet=({onSubmit, fields, trigger, setTrigger, title, validation})=>{
    
    
    const [formData, setFormData] = useState(generateFormData(fields));

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setTrigger(false)
        const payload={};
        Object.values(formData).forEach((field)=>{
            payload[field.name]=field.value
        });
        onSubmit(JSON.stringify(payload));
    };

    const handleChange = (ev) => {
        const value = ev.target.value;
        const fieldName = ev.target.name;
    
        let isValid = true;
        
        
        isValid=validation(value, fieldName);
    
        setFormData({
          ...formData,
          [fieldName]: {
            ...formData[fieldName],
            value: value,
            isValid
          }
        });
      };

      const handleCancle=()=>{
        setTrigger(false);
      }
    

    return trigger?(
        <div className="page-background">
            <div className="form-background">
                <p>{title}</p>
                <br/>
                <form onSubmit={handleSubmit} className="form-container">
                    {fields.map((field) => {
                        const fieldName = field.name;
                        const { type } = field;

                        const isValid = formData[fieldName].isValid;

                        return (
                            <div key={fieldName}>
                                <div className="form_field">
                                    <label className="form_label">{field.title}</label>
                                    <br/>
                                    <input className="form_input"
                                    placeholder={field.placeholder}
                                    value={formData[fieldName].value}
                                    name={fieldName}
                                    onChange={handleChange}
                                    type={type}
                                    required/>
                                    {!isValid && <span style={{ color: "red" }}>Incorrect</span>}
                                </div>
                            </div>
                        );
                    })}
                    <div className="form_button">
                        {/* <Button button_name={"Save"} type={"submit"} onClick={handleSubmit}/>
                        <Button button_name={"Cancle"} onClick={handleCancle}/> */}
                        <button type="Submit">Submit</button>
                        <input  type="button" value="Close" onClick={handleCancle}/>
                    </div>

                        
                    </form>
            </div>

        </div>
        ):"";
    
}

export default BasicFormTemplet;