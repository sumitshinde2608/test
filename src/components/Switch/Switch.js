import Form from 'react-bootstrap/Form';
import React from 'react';
import Tooltop from '../Tooltop/Tooltip';
function Switch(props) {
  return (
    <div class="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
        name={props.data.jsonKey} 
        defaultChecked={props.data.validate.defaultValue}
        required={props.data.validate.required}
        readOnly={props.data.validate.immutable}
        onChange={props.handleChange}
        />
        <label className="form-check-label" for="flexSwitchCheckChecked"><Tooltop  data={props.data} /></label>
    </div>
  );
}

export default Switch;