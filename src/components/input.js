import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Input = ({ state, setState, type, label, placeholder, name, leyendaerror, expresionRegular }) => {

    const [validation, setValidation] = useState(false);
    const [showicon, setShowicon]=useState(false)

    const handleInput = (e) =>  {
        setState({...state, field: e.target.value});  
    }

  const validacion = () => {
      if(expresionRegular){

          if(expresionRegular.test(state.field)){  
            setState({...state, valido : 'true'});
            setValidation(false);
            setShowicon(true);
            
          }else{
            setState({...state, valido : 'false'});
            setValidation(true)
            setShowicon(false)
            
               
          }
      }
  };
 
  return (
    <div>
      <label htmlFor={name} className="label-form">
        {label}
      </label>
      <div className="group-input"> 
        <input
          className="input-form"
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.field}
          onChange={handleInput}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={state.valido}
        />
        {
            showicon && <FontAwesomeIcon icon={faCheckCircle} className="icon-validacion" />
        }
       
      </div>
      {
          validation ?  <p className="error-message-input">{leyendaerror}</p> : null
      }
     
    </div>
  );
};

export default Input;
