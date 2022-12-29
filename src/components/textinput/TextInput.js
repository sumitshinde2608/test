import React from 'react'
import './style.css'
import { connect } from 'react-redux';

import Tooltop from '../Tooltop/Tooltip'

function TextInput(props) {
  console.log('text',props.handleChange)
  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
                <Tooltop  data={props} />
                
            </span>
        </div>
        <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default"
            required={props.required?"required":false}
            disabled={props.immutable}
            pattern = {props.pattern}
            placeholder={props.placeholder}
            name={props.jsonKey}
            onChange={props.handleChange} 
            defaultValue=""
        />
    </div>

  )
}

const mapStateToProps = (state) => ({
	items: state.items
  })
  
export default connect(mapStateToProps)( TextInput)