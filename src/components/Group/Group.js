import React from 'react'
import Base from '../Base/Base';
function Group(data) {
   
    var info = data?.data?.subParameters;
    info?.sort(function (a, b) {
        return a.sort - b.sort;
    });
   
  return (
    <>
    <h4>{data?.data?.label}</h4>
    <hr/>
    {info?.map((texttype)=>{
            return(
              (texttype.uiType=='Ignore')? <Base data={texttype} parents={data.data.subParameters}/>:<Base data={texttype} />
            )
    })}
    </>
  )
}

export default Group