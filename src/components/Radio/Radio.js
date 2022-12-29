import React from 'react'

function Radio(props) {
    console.log(props)
    // const handlesubmit=(e)=>{
    //     console.log(e.target.value)
    //     props.handleChange();
    // }
  return (
    <div >
        {props.data.uiType=='Radio' &&
         <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
            {props.data.validate.options.map((tab,i)=>{
                return(
                    <li class="nav-item" role="presentation">
                        <button name={props.data.jsonKey} class="nav-link" onClick={props.handleChange}   value={tab.value} active={tab.value== props.data.validate.defaultValue} id={`${i+1}`} data-bs-toggle="pill" data-bs-target={`#pills-${i+1}`} type="button" role="tab" aria-controls={`pills-${i+1}`} aria-selected="true">{tab.label}</button>
                    </li>
                )
            })}
        </ul>
        }
            

    </div>
  )
}

export default Radio

{/* <div class="tab-content" id="pills-tabContent">
{props.data.validate.options.map((tab,i)=>{
    return(
        <div class="tab-pane fade show" active={tab.value== props.data.validate.defaultValue} id={`pills-${i+1}`} role="tabpanel" aria-labelledby={i+1}>{tab.label}</div>
    )
})}
</div> */}