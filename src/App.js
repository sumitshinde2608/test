import React, { useState } from 'react';
import './App.css';
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import {connect} from 'react-redux'
import { Row,Col, Placeholder } from 'react-bootstrap';
import Form from './form/Form'
function App(props) {
  let placeholder = {
    sampleObject: [
      
    ]
  };
  const [data,setData]= useState(placeholder);
  return (
    <div className="App">
        <Row>
          <Col>
          <JSONInput
              id="a_unique_id"
              // theme='light_mitsuketa_tribute'
              placeholder={data}
              locale={locale}
              height="550px"
              width="600px"
              onChange={(obj) => {
                if (obj.error) {
                  console.log('ERROR: ', obj.error);
                } else {
                setData(obj.jsObject)
                }
              }}
              onKeyPressUpdate="true"
              />
          </Col>
          <Col className='form'>
                  <Form data={data.sampleObject}/>
          </Col>
        </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(App)
