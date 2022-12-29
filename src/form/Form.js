import React, { useEffect,useState } from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import TextInput from '../components/textinput/TextInput';
import Base from '../components/Base/Base';
import './Form.css'
function Form(data,{...props}) {
    var info = data?.data;
    info?.sort(function (a, b) {
        return a.sort - b.sort;
    });
   
  let [state, setState] = useState({})
  let handleChange = (e) => {
    console.log("handle change called")
    //setState({ ...state, [e.target.name]: e.target.type=="checkbox"?(e.target.checked?false:true):e.target.value });
    
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state)
  };
  return (
    <Card>
        <h2 className="Maintitle">Form</h2>
        {info?.map((texttype)=>{
            return(
              <Card>
                <Base data={texttype} handleChange={handleChange}/>
              </Card>
            )
        })}
    </Card>
  )
}
const mapStateToProps = (state) => ({
	items: state.items
  })
  
export default connect(mapStateToProps)( Form)

//
{/* <Card className='card'>
         
      </Card> */}