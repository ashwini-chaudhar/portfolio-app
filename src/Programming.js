import React from 'react';
import "./programming.css";
export default  function Programming () {
  const value =[{
    text:"javascript",
    percentage: 80,
  },
  {
    text:"Node.Js",
    percentage: 80,
  },
  {
    text:"Paython",
    percentage: 80,
  },
  {
    text:"MongoDB",
    percentage: 80,
  }];
  
  return (
   <> 
        <div>
          <div className='row'>
          {value.map((value,index)=>{
            return<>
            <div className='col-lg-6 col-md-6 col-sm-12 my-2'>
              <span className='Language'>{value.text}</span>
              <div className='progress-some'>
                <div className='progress-new' style={{width:`${value.percentage}%`}}></div>
              </div>
            </div>
            </>
          })}
          </div>
        </div>
   </>
  )
}
