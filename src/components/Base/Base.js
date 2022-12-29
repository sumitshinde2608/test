import React,{useState} from 'react'
import { connect } from 'react-redux';
import TextInput from '../textinput/TextInput'
import Select from '../Select/Select'
import Group from '../Group/Group';
import Switch from '../Switch/Switch';
import Radio from '../Radio/Radio';
import Ignore from '../Ignore/Ignore';
function Base(data) {
  console.log('base',data)
  return (
    <div style={{paddingTop:"10px"}}>
        {(data?.data?.uiType=="Select")?
            <Select handleChange={data?.handleChange}  data={data?.data} />
        :((data?.data?.uiType=="Input")?
            <TextInput handleChange={data?.handleChange} label={data?.data?.label} description={data?.data?.description} required={data?.data?.validate.required} immutable={data?.data?.validate.immutable} pattern={data?.data?.validate.immutable} jsonKey={data?.data?.jsonKey} placeholder={data?.data?.placeholder}/>
        :((data?.data?.uiType=="Switch")?
              <Switch handleChange={data?.handleChange}  data={data?.data}/>
        :((data?.data?.uiType=="Radio")?
              <Radio  handleChange={data.handleChange}  data={data?.data}/>
        :((data?.data?.uiType=="Group")?
              <Group data={data?.data}/>
        :((data?.data?.uiType=="Ignore")?
              <Ignore data={data}/>
        :"Base")))))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
	items: state.items
  })
  
export default connect(mapStateToProps)( Base)